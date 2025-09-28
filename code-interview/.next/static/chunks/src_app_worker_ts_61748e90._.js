(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/worker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
self.onmessage = (e)=>{
    const { code, testCases } = e.data;
    try {
        const results = testCases.map((testCase)=>{
            const { input, output } = testCase;
            const result = new Function(code + "return bubbleSort(".concat(JSON.stringify(input.arr), ")"))();
            return {
                input,
                expected: output,
                actual: result,
                success: JSON.stringify(result) === JSON.stringify(output)
            };
        });
        self.postMessage({
            results
        });
    } catch (e) {
        self.postMessage({
            error: e.message
        });
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_worker_ts_61748e90._.js.map