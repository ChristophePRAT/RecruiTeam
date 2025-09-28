"use client";

import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import ReactMarkdown from "react-markdown";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import { runCode } from "./runner";
import { TestCase, Output } from "./types";

export default function Home() {
    const [code, setCode] = React.useState(
        `function bubbleSort(arr) {\n  // Write your code here\n}`,
    );
    const [output, setOutput] = React.useState<Output | null>(null);

    const testCases: TestCase[] = [
        { input: { arr: [5, 1, 4, 2, 8] }, output: [1, 2, 4, 5, 8] },
        { input: { arr: [10, 2, 7, 1, 8, 3] }, output: [1, 2, 3, 7, 8, 10] },
        { input: { arr: [1, 2, 3, 4, 5] }, output: [1, 2, 3, 4, 5] },
    ];

    const handleRunCode = async () => {
        const result = await runCode(code, testCases);
        setOutput(result);
    };

    const handleSubmit = async () => {
        if (!output) {
            alert("Please run the code first!");
            return;
        }

        const percentage =
            (output!.results!.filter((r: any) => r.success).length /
                output!.results!.length) *
            100;

        try {
            await fetch("http://0.0.0.0:4000/submit_code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    code,
                    percentage,
                }),
            });
            alert("Code submitted successfully!");
        } catch (error) {
            console.error("Error submitting code:", error);
            alert("Failed to submit code.");
        }
    };

    const problemDescription = `\nGiven an array of integers, sort the array in ascending order using the **Bubble Sort** algorithm.\n\n**Example 1:**\n\nInput: arr = [5, 1, 4, 2, 8]\nOutput: [1, 2, 4, 5, 8]\n  `;

    return (
        <>
            <ResizablePanelGroup
                direction="horizontal"
                className="min-h-screen min-w-screen"
            >
                <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                        <Card className="h-full w-full">
                            <CardHeader>
                                <CardTitle>Bubble Sort</CardTitle>
                                <CardDescription>Easy</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ReactMarkdown>
                                    {problemDescription}
                                </ReactMarkdown>
                            </CardContent>
                        </Card>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                    <div className="flex h-full flex-col p-6">
                        <Card className="h-full w-full">
                            <CardHeader>
                                <CardTitle>Code Editor</CardTitle>
                            </CardHeader>
                            <CardContent className="h-3/4">
                                <Editor
                                    value={code}
                                    onValueChange={(code) => setCode(code)}
                                    highlight={(code) =>
                                        Prism.highlight(
                                            code,
                                            Prism.languages.js,
                                            "javascript",
                                        )
                                    }
                                    padding={10}
                                    style={{
                                        fontFamily:
                                            '"Fira code", "Fira Mono", monospace',
                                        fontSize: 12,
                                        border: "1px solid #ddd",
                                        borderRadius: "4px",
                                        height: "100%",
                                    }}
                                />
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button onClick={handleRunCode}>
                                    Run Code
                                </Button>
                                <Button onClick={handleSubmit} className="ml-4">
                                    Submit
                                </Button>
                            </CardFooter>
                            {output &&
                                output.results &&
                                (output.results.every((r: any) => r.success) ? (
                                    <p className="text-green-500">Success</p>
                                ) : (
                                    <p className="text-red-500">Fail</p>
                                ))}
                        </Card>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    );
}
