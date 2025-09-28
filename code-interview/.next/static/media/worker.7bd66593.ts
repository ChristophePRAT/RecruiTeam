interface TestCaseType {
    input: { nums: number[]; target: number };
    output: number[];
}

self.onmessage = (e) => {
    const { code, testCases } = e.data;

    try {
        const results = testCases.map((testCase: TestCaseType) => {
            const { input, output } = testCase;
            const result = new Function(
                code +
                    `return twoSum(${JSON.stringify(
                        input.nums,
                    )}, ${JSON.stringify(input.target)})`,
            )();
            return {
                input,
                expected: output,
                actual: result,
                success: JSON.stringify(result) === JSON.stringify(output),
            };
        });
        self.postMessage({ results });
    } catch (e: any) {
        self.postMessage({ error: e.message });
    }
};
