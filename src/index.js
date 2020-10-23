import { Terminal } from 'xterm';
import './xterm.css'

const term = new Terminal();

term.open(document.getElementById('xterm-container'));

term.write("hello world");