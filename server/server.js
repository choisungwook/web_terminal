const WebSocketServer = require('ws').Server;
const pty = require("node-pty");
const os = require("os");
const port = 8010;

class WEBSOCKET {
    constructor() {
        this.ws = new WebSocketServer({
            port: port,
            clientTracking: true
        });
        // 터미널 변수
        this.shell = os.platform() == "win32" ? "powershell.exe" : "bash";
        this.terminal = null;

        this.event_init();
    }

    // 이벤트 리스너 초기화
    event_init() {
        // 연결 성공
        this.ws.on('connection', (client) => {
            // 터미널 생성            
            this.terminal = pty.spawn(this.shell, [], {
                name: 'xterm-color',
                cwd: process.env.HOME,
                env: process.env,
            });

            // == 터미널 리스너 이벤트 설정 == /

            // 웹클라이언트에서 받은 메세지를 터ㅣ널에 전달
            client.on('message', (command) => {
                this.terminal && this.terminal.write(command);
            });

            // 웹클라이언트에게 명령어 실행결과를 전달
            this.terminal.on('data', (command_result) => {
                client.send(command_result);
            });

            this.terminal.on('exit', (code, singal)=> {
                this.terminal = null;
                console.log("terminal is exited");
            });
        });
        this.ws.on('close', () => {
            this.ondisconnected();
            // 터미널 강제 종료
            if(this.terminal){
                this.terminal.kill(9);
            }
        });
        
    }
};

const server = new WEBSOCKET();
