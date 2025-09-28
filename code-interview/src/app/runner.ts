import { TestCase, Output } from "./types";

export function runCode(code: string, testCases: TestCase[]): Promise<Output> {
    return new Promise((resolve, reject) => {
        const worker = new Worker(new URL("./worker.ts", import.meta.url));

        worker.onmessage = (e) => {
            resolve(e.data);
            worker.terminate();
        };

        worker.onerror = (e) => {
            reject(e.message);
            worker.terminate();
        };

        worker.postMessage({ code, testCases });
    });
}
