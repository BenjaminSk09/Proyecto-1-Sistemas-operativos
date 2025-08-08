// Simulador de gestión de procesos
// se definio para que Js se ejecute cuando el HTMl este cargado
document.addEventListener('DOMContentLoaded', () => {

    // RAM y procesos
    const RAM_TOTAL_MB = 1024;
    let ramDisponible_MB = RAM_TOTAL_MB;
    let runningProcesses = [];
    let waitingQueue = [];
    let nextPid = 1;

    // Elementos del DOM
    const form = document.getElementById('process-form');
    const ramStatusEl = document.getElementById('ram-status');
    const ramBarEl = document.getElementById('ram-bar');
    const runningProcessesEl = document.getElementById('running-processes');
    const waitingQueueEl = document.getElementById('waiting-queue');

    // Clase del proceso
    class Proceso {
        constructor(pid, nombre, memoria, duracion) {
            this.pid = pid;
            this.nombre = nombre;
            this.memoria = memoria;
            this.duracion = duracion;
        }
    }

    // Intenta correr procesos si hay memoria
    function checkAndRunProcesses() {
        for (let i = 0; i < waitingQueue.length; i++) {
            const proceso = waitingQueue[i];
            if (ramDisponible_MB >= proceso.memoria) {
                ramDisponible_MB -= proceso.memoria;
                runningProcesses.push(proceso);
                waitingQueue.splice(i, 1);
                i--; // porque quitamos uno del array
            }
        }
        updateUI();
    }

    // Simula el tiempo: resta duración y elimina los que terminan
    function simulateExecution() {
        const completedPids = [];

        for (const proceso of runningProcesses) {
            proceso.duracion--;
            if (proceso.duracion <= 0) {
                completedPids.push(proceso.pid);
            }
        }

        runningProcesses = runningProcesses.filter(proceso => {
            if (completedPids.includes(proceso.pid)) {
                ramDisponible_MB += proceso.memoria;
                return false;
            }
            return true;
        });

        checkAndRunProcesses();
        updateUI();
    }