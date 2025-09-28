(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/safeExecute.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeExecute",
    ()=>safeExecute
]);
async function safeExecute(fn) {
    try {
        return [
            null,
            await fn()
        ];
    } catch (error) {
        return [
            error,
            null
        ];
    }
} //# sourceMappingURL=safeExecute.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base class for all errors thrown by the library.
 */ __turbopack_context__.s([
    "AgentsError",
    ()=>AgentsError,
    "GuardrailExecutionError",
    ()=>GuardrailExecutionError,
    "InputGuardrailTripwireTriggered",
    ()=>InputGuardrailTripwireTriggered,
    "MaxTurnsExceededError",
    ()=>MaxTurnsExceededError,
    "ModelBehaviorError",
    ()=>ModelBehaviorError,
    "OutputGuardrailTripwireTriggered",
    ()=>OutputGuardrailTripwireTriggered,
    "SystemError",
    ()=>SystemError,
    "ToolCallError",
    ()=>ToolCallError,
    "UserError",
    ()=>UserError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class AgentsError extends Error {
    constructor(message, state){
        super(message), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "state", void 0);
        this.state = state;
    }
}
class SystemError extends AgentsError {
}
class MaxTurnsExceededError extends AgentsError {
}
class ModelBehaviorError extends AgentsError {
}
class UserError extends AgentsError {
}
class GuardrailExecutionError extends AgentsError {
    constructor(message, error, state){
        super(message, state), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "error", void 0);
        this.error = error;
    }
}
class ToolCallError extends AgentsError {
    constructor(message, error, state){
        super(message, state), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "error", void 0);
        this.error = error;
    }
}
class InputGuardrailTripwireTriggered extends AgentsError {
    constructor(message, result, state){
        super(message, state), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "result", void 0);
        this.result = result;
    }
}
class OutputGuardrailTripwireTriggered extends AgentsError {
    constructor(message, result, state){
        super(message, state), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "result", void 0);
        this.result = result;
    }
} //# sourceMappingURL=errors.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/typeGuards.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Verifies that an input is a ZodObject without needing to have Zod at runtime since it's an
 * optional dependency.
 * @param input
 * @returns
 */ __turbopack_context__.s([
    "isAgentToolInput",
    ()=>isAgentToolInput,
    "isZodObject",
    ()=>isZodObject
]);
function isZodObject(input) {
    return typeof input === 'object' && input !== null && '_def' in input && typeof input._def === 'object' && input._def !== null && 'typeName' in input._def && input._def.typeName === 'ZodObject';
}
function isAgentToolInput(input) {
    return typeof input === 'object' && input !== null && 'input' in input && typeof input.input === 'string';
} //# sourceMappingURL=typeGuards.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/tools.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertAgentOutputTypeToSerializable",
    ()=>convertAgentOutputTypeToSerializable,
    "getSchemaAndParserFromInputType",
    ()=>getSchemaAndParserFromInputType,
    "toFunctionToolName",
    ()=>toFunctionToolName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$openai$40$5$2e$23$2e$1_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$openai$2f$helpers$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/openai@5.23.1_ws@8.18.3_zod@3.25.76/node_modules/openai/helpers/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/typeGuards.mjs [app-client] (ecmascript)");
;
;
;
function toFunctionToolName(name) {
    // Replace spaces with underscores
    name = name.replace(/\s/g, '_');
    // Replace non-alphanumeric characters with underscores
    name = name.replace(/[^a-zA-Z0-9]/g, '_');
    // Ensure the name is not empty
    if (name.length === 0) {
        throw new Error('Tool name cannot be empty');
    }
    return name;
}
function getSchemaAndParserFromInputType(inputType, name) {
    const parser = (input)=>JSON.parse(input);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZodObject"])(inputType)) {
        const formattedFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$openai$40$5$2e$23$2e$1_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$openai$2f$helpers$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResponsesFunction"])({
            name,
            parameters: inputType,
            function: ()=>{},
            description: ''
        });
        return {
            schema: formattedFunction.parameters,
            parser: formattedFunction.$parseRaw
        };
    } else if (typeof inputType === 'object' && inputType !== null) {
        return {
            schema: inputType,
            parser
        };
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]('Input type is not a ZodObject or a valid JSON schema');
}
function convertAgentOutputTypeToSerializable(outputType) {
    if (outputType === 'text') {
        return 'text';
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZodObject"])(outputType)) {
        const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$openai$40$5$2e$23$2e$1_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$openai$2f$helpers$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodTextFormat"])(outputType, 'output');
        return {
            type: output.type,
            name: output.name,
            strict: output.strict || false,
            schema: output.schema
        };
    }
    return outputType;
} //# sourceMappingURL=tools.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadEnv",
    ()=>loadEnv,
    "logging",
    ()=>logging,
    "tracing",
    ()=>tracing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>");
;
function loadEnv() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadEnv"])();
}
/**
 * Checks if a flag is enabled in the environment.
 *
 * @param flagName - The name of the flag to check.
 * @returns `true` if the flag is enabled, `false` otherwise.
 */ function isEnabled(flagName) {
    const env = loadEnv();
    return typeof env !== 'undefined' && (env[flagName] === 'true' || env[flagName] === '1');
}
const tracing = {
    get disabled () {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBrowserEnvironment"])()) {
            return true;
        } else if (loadEnv().NODE_ENV === 'test') {
            // disabling by default in tests
            return true;
        }
        return isEnabled('OPENAI_AGENTS_DISABLE_TRACING');
    }
};
const logging = {
    get dontLogModelData () {
        return isEnabled('OPENAI_AGENTS_DONT_LOG_MODEL_DATA');
    },
    get dontLogToolData () {
        return isEnabled('OPENAI_AGENTS_DONT_LOG_TOOL_DATA');
    }
}; //# sourceMappingURL=config.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getLogger",
    ()=>getLogger,
    "logger",
    ()=>logger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$3$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/config.mjs [app-client] (ecmascript)");
;
;
/**
 * By default we don't log LLM inputs/outputs, to prevent exposing sensitive data. Set this flag
 * to enable logging them.
 */ const dontLogModelData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logging"].dontLogModelData;
/**
 * By default we don't log tool inputs/outputs, to prevent exposing sensitive data. Set this flag
 * to enable logging them.
 */ const dontLogToolData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logging"].dontLogToolData;
function getLogger() {
    let namespace = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'openai-agents';
    return {
        namespace,
        debug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$3$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(namespace),
        error: console.error,
        warn: console.warn,
        dontLogModelData,
        dontLogToolData
    };
}
const logger = getLogger('openai-agents:core');
const __TURBOPACK__default__export__ = logger;
 //# sourceMappingURL=logger.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/smartString.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toSmartString",
    ()=>toSmartString
]);
function toSmartString(value) {
    if (value === null || value === undefined) {
        return String(value);
    } else if (typeof value === 'string') {
        return value;
    } else if (typeof value === 'object') {
        try {
            return JSON.stringify(value);
        } catch (_e) {
            return '[object with circular references]';
        }
    }
    return String(value);
} //# sourceMappingURL=smartString.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tool.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computerTool",
    ()=>computerTool,
    "hostedMcpTool",
    ()=>hostedMcpTool,
    "tool",
    ()=>tool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$safeExecute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/safeExecute.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/tools.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/typeGuards.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/smartString.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function computerTool(options) {
    var _options_name;
    return {
        type: 'computer',
        name: (_options_name = options.name) !== null && _options_name !== void 0 ? _options_name : 'computer_use_preview',
        computer: options.computer
    };
}
function hostedMcpTool(options) {
    if ('serverUrl' in options) {
        // the MCP servers comaptible with the specification
        const providerData = typeof options.requireApproval === 'undefined' || options.requireApproval === 'never' ? {
            type: 'mcp',
            server_label: options.serverLabel,
            server_url: options.serverUrl,
            require_approval: 'never',
            allowed_tools: toMcpAllowedToolsFilter(options.allowedTools),
            headers: options.headers
        } : {
            type: 'mcp',
            server_label: options.serverLabel,
            server_url: options.serverUrl,
            allowed_tools: toMcpAllowedToolsFilter(options.allowedTools),
            headers: options.headers,
            require_approval: typeof options.requireApproval === 'string' ? 'always' : buildRequireApproval(options.requireApproval),
            on_approval: options.onApproval
        };
        return {
            type: 'hosted_tool',
            name: 'hosted_mcp',
            providerData
        };
    } else if ('connectorId' in options) {
        // OpenAI's connectors
        const providerData = typeof options.requireApproval === 'undefined' || options.requireApproval === 'never' ? {
            type: 'mcp',
            server_label: options.serverLabel,
            connector_id: options.connectorId,
            authorization: options.authorization,
            require_approval: 'never',
            allowed_tools: toMcpAllowedToolsFilter(options.allowedTools),
            headers: options.headers
        } : {
            type: 'mcp',
            server_label: options.serverLabel,
            connector_id: options.connectorId,
            authorization: options.authorization,
            allowed_tools: toMcpAllowedToolsFilter(options.allowedTools),
            headers: options.headers,
            require_approval: typeof options.requireApproval === 'string' ? 'always' : buildRequireApproval(options.requireApproval),
            on_approval: options.onApproval
        };
        return {
            type: 'hosted_tool',
            name: 'hosted_mcp',
            providerData
        };
    } else {
        // the MCP servers comaptible with the specification
        const providerData = typeof options.requireApproval === 'undefined' || options.requireApproval === 'never' ? {
            type: 'mcp',
            server_label: options.serverLabel,
            require_approval: 'never',
            allowed_tools: toMcpAllowedToolsFilter(options.allowedTools)
        } : {
            type: 'mcp',
            server_label: options.serverLabel,
            allowed_tools: toMcpAllowedToolsFilter(options.allowedTools),
            require_approval: typeof options.requireApproval === 'string' ? 'always' : buildRequireApproval(options.requireApproval),
            on_approval: options.onApproval
        };
        return {
            type: 'hosted_tool',
            name: 'hosted_mcp',
            providerData
        };
    }
}
/**
 * The default function to invoke when an error occurs while running the tool.
 *
 * Always returns `An error occurred while running the tool. Please try again. Error: <error details>`
 *
 * @param context An instance of the current RunContext
 * @param error The error that occurred
 */ function defaultToolErrorFunction(context, error) {
    const details = error instanceof Error ? error.toString() : String(error);
    return "An error occurred while running the tool. Please try again. Error: ".concat(details);
}
function tool(options) {
    const name = options.name ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFunctionToolName"])(options.name) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFunctionToolName"])(options.execute.name);
    const toolErrorFunction = typeof options.errorFunction === 'undefined' ? defaultToolErrorFunction : options.errorFunction;
    if (!name) {
        throw new Error('Tool name cannot be empty. Either name your function or provide a name in the options.');
    }
    var _options_strict;
    const strictMode = (_options_strict = options.strict) !== null && _options_strict !== void 0 ? _options_strict : true;
    if (!strictMode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZodObject"])(options.parameters)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]('Strict mode is required for Zod parameters');
    }
    const { parser, schema: parameters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaAndParserFromInputType"])(options.parameters, name);
    async function _invoke(runContext, input, details) {
        const [error, parsed] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$safeExecute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeExecute"])(()=>parser(input));
        if (error !== null) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dontLogToolData) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Invalid JSON input for tool ".concat(name));
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Invalid JSON input for tool ".concat(name, ": ").concat(input));
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"]('Invalid JSON input for tool');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dontLogToolData) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Invoking tool ".concat(name));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Invoking tool ".concat(name, " with input ").concat(input));
        }
        const result = await options.execute(parsed, runContext, details);
        const stringResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSmartString"])(result);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dontLogToolData) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Tool ".concat(name, " completed"));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Tool ".concat(name, " returned: ").concat(stringResult));
        }
        return result;
    }
    async function invoke(runContext, input, details) {
        return _invoke(runContext, input, details).catch((error)=>{
            if (toolErrorFunction) {
                const currentSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSpan"])();
                currentSpan === null || currentSpan === void 0 ? void 0 : currentSpan.setError({
                    message: 'Error running tool (non-fatal)',
                    data: {
                        tool_name: name,
                        error: error.toString()
                    }
                });
                return toolErrorFunction(runContext, error);
            }
            throw error;
        });
    }
    const needsApproval = typeof options.needsApproval === 'function' ? options.needsApproval : async ()=>typeof options.needsApproval === 'boolean' ? options.needsApproval : false;
    return {
        type: 'function',
        name,
        description: options.description,
        parameters,
        strict: strictMode,
        invoke,
        needsApproval
    };
}
function buildRequireApproval(requireApproval) {
    const result = {};
    if (requireApproval.always) {
        result.always = {
            tool_names: requireApproval.always.toolNames
        };
    }
    if (requireApproval.never) {
        result.never = {
            tool_names: requireApproval.never.toolNames
        };
    }
    return result;
}
function toMcpAllowedToolsFilter(allowedTools) {
    if (typeof allowedTools === 'undefined') {
        return undefined;
    }
    if (Array.isArray(allowedTools)) {
        return {
            tool_names: allowedTools
        };
    }
    var _allowedTools_toolNames;
    return {
        tool_names: (_allowedTools_toolNames = allowedTools === null || allowedTools === void 0 ? void 0 : allowedTools.toolNames) !== null && _allowedTools_toolNames !== void 0 ? _allowedTools_toolNames : []
    };
} //# sourceMappingURL=tool.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/createSpans.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAgentSpan",
    ()=>createAgentSpan,
    "createCustomSpan",
    ()=>createCustomSpan,
    "createFunctionSpan",
    ()=>createFunctionSpan,
    "createGenerationSpan",
    ()=>createGenerationSpan,
    "createGuardrailSpan",
    ()=>createGuardrailSpan,
    "createHandoffSpan",
    ()=>createHandoffSpan,
    "createMCPListToolsSpan",
    ()=>createMCPListToolsSpan,
    "createResponseSpan",
    ()=>createResponseSpan,
    "createSpeechGroupSpan",
    ()=>createSpeechGroupSpan,
    "createSpeechSpan",
    ()=>createSpeechSpan,
    "createTranscriptionSpan",
    ()=>createTranscriptionSpan,
    "withAgentSpan",
    ()=>withAgentSpan,
    "withCustomSpan",
    ()=>withCustomSpan,
    "withFunctionSpan",
    ()=>withFunctionSpan,
    "withGenerationSpan",
    ()=>withGenerationSpan,
    "withGuardrailSpan",
    ()=>withGuardrailSpan,
    "withHandoffSpan",
    ()=>withHandoffSpan,
    "withMCPListToolsSpan",
    ()=>withMCPListToolsSpan,
    "withResponseSpan",
    ()=>withResponseSpan,
    "withSpeechGroupSpan",
    ()=>withSpeechGroupSpan,
    "withSpeechSpan",
    ()=>withSpeechSpan,
    "withTranscriptionSpan",
    ()=>withTranscriptionSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/provider.mjs [app-client] (ecmascript)");
;
;
function _withSpanFactory(createSpan) {
    return async function(fn) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        // Creating a new span context to make sure that the previous span is correctly reset
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withNewSpanContext"])(async ()=>{
            const span = createSpan(...args);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentSpan"])(span);
            try {
                span.start();
                return await fn(span);
            } catch (error) {
                span.setError({
                    message: error.message,
                    data: error.data
                });
                throw error;
            } finally{
                span.end();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetCurrentSpan"])();
            }
        });
    };
}
function createResponseSpan(options, parent) {
    options = {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'response',
            ...options.data
        }
    }, parent);
}
const withResponseSpan = _withSpanFactory(createResponseSpan);
function createAgentSpan(options, parent) {
    var _options_data;
    var _options_data_name;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'agent',
            name: (_options_data_name = options === null || options === void 0 ? void 0 : (_options_data = options.data) === null || _options_data === void 0 ? void 0 : _options_data.name) !== null && _options_data_name !== void 0 ? _options_data_name : 'Agent',
            ...options === null || options === void 0 ? void 0 : options.data
        }
    }, parent);
}
const withAgentSpan = _withSpanFactory(createAgentSpan);
function createFunctionSpan(options, parent) {
    var _options_data, _options_data1;
    var _options_data_input, _options_data_output;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'function',
            input: (_options_data_input = options === null || options === void 0 ? void 0 : (_options_data = options.data) === null || _options_data === void 0 ? void 0 : _options_data.input) !== null && _options_data_input !== void 0 ? _options_data_input : '',
            output: (_options_data_output = options === null || options === void 0 ? void 0 : (_options_data1 = options.data) === null || _options_data1 === void 0 ? void 0 : _options_data1.output) !== null && _options_data_output !== void 0 ? _options_data_output : '',
            ...options === null || options === void 0 ? void 0 : options.data
        }
    }, parent);
}
const withFunctionSpan = _withSpanFactory(createFunctionSpan);
function createHandoffSpan(options, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'handoff',
            ...options === null || options === void 0 ? void 0 : options.data
        }
    }, parent);
}
const withHandoffSpan = _withSpanFactory(createHandoffSpan);
function createGenerationSpan(options, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'generation',
            ...options === null || options === void 0 ? void 0 : options.data
        }
    }, parent);
}
const withGenerationSpan = _withSpanFactory(createGenerationSpan);
function createCustomSpan(options, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'custom',
            data: {},
            ...options === null || options === void 0 ? void 0 : options.data
        }
    }, parent);
}
const withCustomSpan = _withSpanFactory(createCustomSpan);
function createGuardrailSpan(options, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'guardrail',
            triggered: false,
            ...options === null || options === void 0 ? void 0 : options.data
        }
    }, parent);
}
const withGuardrailSpan = _withSpanFactory(createGuardrailSpan);
function createTranscriptionSpan(options, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'transcription',
            ...options.data
        }
    }, parent);
}
const withTranscriptionSpan = _withSpanFactory(createTranscriptionSpan);
function createSpeechSpan(options, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'speech',
            ...options.data
        }
    }, parent);
}
const withSpeechSpan = _withSpanFactory(createSpeechSpan);
function createSpeechGroupSpan(options, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'speech_group',
            ...options === null || options === void 0 ? void 0 : options.data
        }
    }, parent);
}
const withSpeechGroupSpan = _withSpanFactory(createSpeechGroupSpan);
function createMCPListToolsSpan(options, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        ...options,
        data: {
            type: 'mcp_tools',
            ...options === null || options === void 0 ? void 0 : options.data
        }
    }, parent);
}
const withMCPListToolsSpan = _withSpanFactory(createMCPListToolsSpan); //# sourceMappingURL=createSpans.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/mcp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseMCPServerSSE",
    ()=>BaseMCPServerSSE,
    "BaseMCPServerStdio",
    ()=>BaseMCPServerStdio,
    "BaseMCPServerStreamableHttp",
    ()=>BaseMCPServerStreamableHttp,
    "DEFAULT_SSE_MCP_CLIENT_LOGGER_NAME",
    ()=>DEFAULT_SSE_MCP_CLIENT_LOGGER_NAME,
    "DEFAULT_STDIO_MCP_CLIENT_LOGGER_NAME",
    ()=>DEFAULT_STDIO_MCP_CLIENT_LOGGER_NAME,
    "DEFAULT_STREAMABLE_HTTP_MCP_CLIENT_LOGGER_NAME",
    ()=>DEFAULT_STREAMABLE_HTTP_MCP_CLIENT_LOGGER_NAME,
    "MCPServerSSE",
    ()=>MCPServerSSE,
    "MCPServerStdio",
    ()=>MCPServerStdio,
    "MCPServerStreamableHttp",
    ()=>MCPServerStreamableHttp,
    "MCPTool",
    ()=>MCPTool,
    "getAllMcpTools",
    ()=>getAllMcpTools,
    "invalidateServerToolsCache",
    ()=>invalidateServerToolsCache,
    "mcpToFunctionTool",
    ()=>mcpToFunctionTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tool.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$mcp$2d$server$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/mcp-server/browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/createSpans.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$3$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
;
;
;
;
;
;
;
const DEFAULT_STDIO_MCP_CLIENT_LOGGER_NAME = 'openai-agents:stdio-mcp-client';
const DEFAULT_STREAMABLE_HTTP_MCP_CLIENT_LOGGER_NAME = 'openai-agents:streamable-http-mcp-client';
const DEFAULT_SSE_MCP_CLIENT_LOGGER_NAME = 'openai-agents:sse-mcp-client';
class BaseMCPServerStdio {
    /**
     * Logs a debug message when debug logging is enabled.
     * @param buildMessage A function that returns the message to log.
     */ debugLog(buildMessage) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$3$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enabled(this.logger.namespace)) {
            // only when this is true, the function to build the string is called
            this.logger.debug(buildMessage());
        }
    }
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "cacheToolsList", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_cachedTools", undefined);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "toolFilter", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "logger", void 0);
        var _options_logger;
        this.logger = (_options_logger = options.logger) !== null && _options_logger !== void 0 ? _options_logger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])(DEFAULT_STDIO_MCP_CLIENT_LOGGER_NAME);
        var _options_cacheToolsList;
        this.cacheToolsList = (_options_cacheToolsList = options.cacheToolsList) !== null && _options_cacheToolsList !== void 0 ? _options_cacheToolsList : false;
        this.toolFilter = options.toolFilter;
    }
}
class BaseMCPServerStreamableHttp {
    /**
     * Logs a debug message when debug logging is enabled.
     * @param buildMessage A function that returns the message to log.
     */ debugLog(buildMessage) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$3$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enabled(this.logger.namespace)) {
            // only when this is true, the function to build the string is called
            this.logger.debug(buildMessage());
        }
    }
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "cacheToolsList", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_cachedTools", undefined);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "toolFilter", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "logger", void 0);
        var _options_logger;
        this.logger = (_options_logger = options.logger) !== null && _options_logger !== void 0 ? _options_logger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])(DEFAULT_STREAMABLE_HTTP_MCP_CLIENT_LOGGER_NAME);
        var _options_cacheToolsList;
        this.cacheToolsList = (_options_cacheToolsList = options.cacheToolsList) !== null && _options_cacheToolsList !== void 0 ? _options_cacheToolsList : false;
        this.toolFilter = options.toolFilter;
    }
}
class BaseMCPServerSSE {
    /**
     * Logs a debug message when debug logging is enabled.
     * @param buildMessage A function that returns the message to log.
     */ debugLog(buildMessage) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$3$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enabled(this.logger.namespace)) {
            // only when this is true, the function to build the string is called
            this.logger.debug(buildMessage());
        }
    }
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "cacheToolsList", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_cachedTools", undefined);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "toolFilter", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "logger", void 0);
        var _options_logger;
        this.logger = (_options_logger = options.logger) !== null && _options_logger !== void 0 ? _options_logger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])(DEFAULT_SSE_MCP_CLIENT_LOGGER_NAME);
        var _options_cacheToolsList;
        this.cacheToolsList = (_options_cacheToolsList = options.cacheToolsList) !== null && _options_cacheToolsList !== void 0 ? _options_cacheToolsList : false;
        this.toolFilter = options.toolFilter;
    }
}
const MCPTool = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('object'),
        properties: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()),
        required: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        additionalProperties: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    })
});
class MCPServerStdio extends BaseMCPServerStdio {
    get name() {
        return this.underlying.name;
    }
    connect() {
        return this.underlying.connect();
    }
    close() {
        return this.underlying.close();
    }
    async listTools() {
        if (this.cacheToolsList && this._cachedTools) {
            return this._cachedTools;
        }
        const tools = await this.underlying.listTools();
        if (this.cacheToolsList) {
            this._cachedTools = tools;
        }
        return tools;
    }
    callTool(toolName, args) {
        return this.underlying.callTool(toolName, args);
    }
    invalidateToolsCache() {
        return this.underlying.invalidateToolsCache();
    }
    constructor(options){
        super(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "underlying", void 0);
        this.underlying = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$mcp$2d$server$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MCPServerStdio"](options);
    }
}
class MCPServerStreamableHttp extends BaseMCPServerStreamableHttp {
    get name() {
        return this.underlying.name;
    }
    connect() {
        return this.underlying.connect();
    }
    close() {
        return this.underlying.close();
    }
    async listTools() {
        if (this.cacheToolsList && this._cachedTools) {
            return this._cachedTools;
        }
        const tools = await this.underlying.listTools();
        if (this.cacheToolsList) {
            this._cachedTools = tools;
        }
        return tools;
    }
    callTool(toolName, args) {
        return this.underlying.callTool(toolName, args);
    }
    invalidateToolsCache() {
        return this.underlying.invalidateToolsCache();
    }
    constructor(options){
        super(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "underlying", void 0);
        this.underlying = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$mcp$2d$server$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MCPServerStreamableHttp"](options);
    }
}
class MCPServerSSE extends BaseMCPServerSSE {
    get name() {
        return this.underlying.name;
    }
    connect() {
        return this.underlying.connect();
    }
    close() {
        return this.underlying.close();
    }
    async listTools() {
        if (this.cacheToolsList && this._cachedTools) {
            return this._cachedTools;
        }
        const tools = await this.underlying.listTools();
        if (this.cacheToolsList) {
            this._cachedTools = tools;
        }
        return tools;
    }
    callTool(toolName, args) {
        return this.underlying.callTool(toolName, args);
    }
    invalidateToolsCache() {
        return this.underlying.invalidateToolsCache();
    }
    constructor(options){
        super(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "underlying", void 0);
        this.underlying = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$mcp$2d$server$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MCPServerSSE"](options);
    }
}
/**
 * Fetches and flattens all tools from multiple MCP servers.
 * Logs and skips any servers that fail to respond.
 */ const _cachedTools = {};
async function invalidateServerToolsCache(serverName) {
    delete _cachedTools[serverName];
}
/**
 * Fetches all function tools from a single MCP server.
 */ async function getFunctionToolsFromServer(param) {
    let { server, convertSchemasToStrict, runContext, agent } = param;
    if (server.cacheToolsList && _cachedTools[server.name]) {
        return _cachedTools[server.name].map((t)=>mcpToFunctionTool(t, server, convertSchemasToStrict));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withMCPListToolsSpan"])(async (span)=>{
        const fetchedMcpTools = await server.listTools();
        let mcpTools = fetchedMcpTools;
        if (runContext && agent) {
            const context = {
                runContext,
                agent,
                serverName: server.name
            };
            const filteredTools = [];
            for (const tool of fetchedMcpTools){
                const filter = server.toolFilter;
                if (filter) {
                    if (typeof filter === 'function') {
                        const filtered = await filter(context, tool);
                        if (!filtered) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug("MCP Tool (server: ".concat(server.name, ", tool: ").concat(tool.name, ") is blocked by the callable filter."));
                            continue;
                        }
                    } else {
                        var _filter_allowedToolNames;
                        const allowedToolNames = (_filter_allowedToolNames = filter.allowedToolNames) !== null && _filter_allowedToolNames !== void 0 ? _filter_allowedToolNames : [];
                        var _filter_blockedToolNames;
                        const blockedToolNames = (_filter_blockedToolNames = filter.blockedToolNames) !== null && _filter_blockedToolNames !== void 0 ? _filter_blockedToolNames : [];
                        if (allowedToolNames.length > 0 || blockedToolNames.length > 0) {
                            const allowed = allowedToolNames.length > 0 ? allowedToolNames.includes(tool.name) : true;
                            const blocked = blockedToolNames.length > 0 ? blockedToolNames.includes(tool.name) : false;
                            if (!allowed || blocked) {
                                if (blocked) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug("MCP Tool (server: ".concat(server.name, ", tool: ").concat(tool.name, ") is blocked by the static filter."));
                                } else if (!allowed) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug("MCP Tool (server: ".concat(server.name, ", tool: ").concat(tool.name, ") is not allowed by the static filter."));
                                }
                                continue;
                            }
                        }
                    }
                }
                filteredTools.push(tool);
            }
            mcpTools = filteredTools;
        }
        span.spanData.result = mcpTools.map((t)=>t.name);
        const tools = mcpTools.map((t)=>mcpToFunctionTool(t, server, convertSchemasToStrict));
        if (server.cacheToolsList) {
            _cachedTools[server.name] = mcpTools;
        }
        return tools;
    }, {
        data: {
            server: server.name
        }
    });
}
async function getAllMcpTools(mcpServersOrOpts, runContext, agent) {
    let convertSchemasToStrict = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const opts = Array.isArray(mcpServersOrOpts) ? {
        mcpServers: mcpServersOrOpts,
        runContext,
        agent,
        convertSchemasToStrict
    } : mcpServersOrOpts;
    const { mcpServers, convertSchemasToStrict: convertSchemasToStrictFromOpts = false, runContext: runContextFromOpts, agent: agentFromOpts } = opts;
    const allTools = [];
    const toolNames = new Set();
    for (const server of mcpServers){
        const serverTools = await getFunctionToolsFromServer({
            server,
            convertSchemasToStrict: convertSchemasToStrictFromOpts,
            runContext: runContextFromOpts,
            agent: agentFromOpts
        });
        const serverToolNames = new Set(serverTools.map((t)=>t.name));
        const intersection = [
            ...serverToolNames
        ].filter((n)=>toolNames.has(n));
        if (intersection.length > 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]("Duplicate tool names found across MCP servers: ".concat(intersection.join(', ')));
        }
        for (const t of serverTools){
            toolNames.add(t.name);
            allTools.push(t);
        }
    }
    return allTools;
}
function mcpToFunctionTool(mcpTool, server, convertSchemasToStrict) {
    var _mcpTool_inputSchema, _mcpTool_inputSchema1, _mcpTool_inputSchema2, _mcpTool_inputSchema3;
    async function invoke(input, _context) {
        let args = {};
        if (typeof input === 'string' && input) {
            args = JSON.parse(input);
        } else if (typeof input === 'object' && input != null) {
            args = input;
        }
        const currentSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSpan"])();
        if (currentSpan) {
            currentSpan.spanData['mcp_data'] = {
                server: server.name
            };
        }
        const content = await server.callTool(mcpTool.name, args);
        return content.length === 1 ? content[0] : content;
    }
    var _mcpTool_inputSchema_type, _mcpTool_inputSchema_properties, _mcpTool_inputSchema_required, _mcpTool_inputSchema_additionalProperties;
    const schema = {
        ...mcpTool.inputSchema,
        type: (_mcpTool_inputSchema_type = (_mcpTool_inputSchema = mcpTool.inputSchema) === null || _mcpTool_inputSchema === void 0 ? void 0 : _mcpTool_inputSchema.type) !== null && _mcpTool_inputSchema_type !== void 0 ? _mcpTool_inputSchema_type : 'object',
        properties: (_mcpTool_inputSchema_properties = (_mcpTool_inputSchema1 = mcpTool.inputSchema) === null || _mcpTool_inputSchema1 === void 0 ? void 0 : _mcpTool_inputSchema1.properties) !== null && _mcpTool_inputSchema_properties !== void 0 ? _mcpTool_inputSchema_properties : {},
        required: (_mcpTool_inputSchema_required = (_mcpTool_inputSchema2 = mcpTool.inputSchema) === null || _mcpTool_inputSchema2 === void 0 ? void 0 : _mcpTool_inputSchema2.required) !== null && _mcpTool_inputSchema_required !== void 0 ? _mcpTool_inputSchema_required : [],
        additionalProperties: (_mcpTool_inputSchema_additionalProperties = (_mcpTool_inputSchema3 = mcpTool.inputSchema) === null || _mcpTool_inputSchema3 === void 0 ? void 0 : _mcpTool_inputSchema3.additionalProperties) !== null && _mcpTool_inputSchema_additionalProperties !== void 0 ? _mcpTool_inputSchema_additionalProperties : false
    };
    if (convertSchemasToStrict || schema.additionalProperties === true) {
        try {
            const strictSchema = ensureStrictJsonSchema(schema);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tool"])({
                name: mcpTool.name,
                description: mcpTool.description || '',
                parameters: strictSchema,
                strict: true,
                execute: invoke
            });
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn("Error converting MCP schema to strict mode: ".concat(e));
        }
    }
    const nonStrictSchema = {
        ...schema,
        additionalProperties: true
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tool"])({
        name: mcpTool.name,
        description: mcpTool.description || '',
        parameters: nonStrictSchema,
        strict: false,
        execute: invoke
    });
}
/**
 * Ensures the given JSON schema is strict (no additional properties, required fields set).
 */ function ensureStrictJsonSchema(schema) {
    const out = {
        ...schema,
        additionalProperties: false
    };
    if (!out.required) out.required = [];
    return out;
} //# sourceMappingURL=mcp.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/mcp-server/browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MCPServerSSE",
    ()=>MCPServerSSE,
    "MCPServerStdio",
    ()=>MCPServerStdio,
    "MCPServerStreamableHttp",
    ()=>MCPServerStreamableHttp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$mcp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/mcp.mjs [app-client] (ecmascript)");
;
class MCPServerStdio extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$mcp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMCPServerStdio"] {
    get name() {
        return 'MCPServerStdio';
    }
    connect() {
        throw new Error('Method not implemented.');
    }
    close() {
        throw new Error('Method not implemented.');
    }
    listTools() {
        throw new Error('Method not implemented.');
    }
    callTool(_toolName, _args) {
        throw new Error('Method not implemented.');
    }
    invalidateToolsCache() {
        throw new Error('Method not implemented.');
    }
    constructor(params){
        super(params);
    }
}
class MCPServerStreamableHttp extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$mcp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMCPServerStreamableHttp"] {
    get name() {
        return 'MCPServerStdio';
    }
    connect() {
        throw new Error('Method not implemented.');
    }
    close() {
        throw new Error('Method not implemented.');
    }
    listTools() {
        throw new Error('Method not implemented.');
    }
    callTool(_toolName, _args) {
        throw new Error('Method not implemented.');
    }
    invalidateToolsCache() {
        throw new Error('Method not implemented.');
    }
    constructor(params){
        super(params);
    }
}
class MCPServerSSE extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$mcp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMCPServerSSE"] {
    get name() {
        return 'MCPServerSSE';
    }
    connect() {
        throw new Error('Method not implemented.');
    }
    close() {
        throw new Error('Method not implemented.');
    }
    listTools() {
        throw new Error('Method not implemented.');
    }
    callTool(_toolName, _args) {
        throw new Error('Method not implemented.');
    }
    invalidateToolsCache() {
        throw new Error('Method not implemented.');
    }
    constructor(params){
        super(params);
    }
} //# sourceMappingURL=browser.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/// <reference lib="dom" />
// Use function instead of exporting the value to prevent
// circular dependency resolution issues caused by other exports in '@openai/agents-core/_shims'
__turbopack_context__.s([
    "AsyncLocalStorage",
    ()=>AsyncLocalStorage,
    "BrowserEventEmitter",
    ()=>BrowserEventEmitter,
    "Readable",
    ()=>Readable,
    "ReadableStream",
    ()=>ReadableStream,
    "ReadableStreamController",
    ()=>ReadableStreamController,
    "RuntimeEventEmitter",
    ()=>BrowserEventEmitter,
    "TransformStream",
    ()=>TransformStream,
    "isBrowserEnvironment",
    ()=>isBrowserEnvironment,
    "isTracingLoopRunningByDefault",
    ()=>isTracingLoopRunningByDefault,
    "loadEnv",
    ()=>loadEnv,
    "randomUUID",
    ()=>randomUUID,
    "timer",
    ()=>timer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$mcp$2d$server$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/mcp-server/browser.mjs [app-client] (ecmascript)");
;
;
;
function loadEnv() {
    return {};
}
var _target = /*#__PURE__*/ new WeakMap(), _listenerWrappers = /*#__PURE__*/ new WeakMap();
class BrowserEventEmitter {
    on(type, listener) {
        const eventType = type;
        let listenersForType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listenerWrappers).get(eventType);
        if (!listenersForType) {
            listenersForType = new Map();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listenerWrappers).set(eventType, listenersForType);
        }
        let wrappers = listenersForType.get(listener);
        if (!wrappers) {
            wrappers = new Set();
            listenersForType.set(listener, wrappers);
        }
        const wrapper = (event)=>{
            var _event_detail;
            return listener(...(_event_detail = event.detail) !== null && _event_detail !== void 0 ? _event_detail : []);
        };
        wrappers.add(wrapper);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _target).addEventListener(eventType, wrapper);
        return this;
    }
    off(type, listener) {
        const eventType = type;
        const listenersForType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listenerWrappers).get(eventType);
        const wrappers = listenersForType === null || listenersForType === void 0 ? void 0 : listenersForType.get(listener);
        if (wrappers === null || wrappers === void 0 ? void 0 : wrappers.size) {
            for (const wrapper of wrappers){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _target).removeEventListener(eventType, wrapper);
            }
            listenersForType === null || listenersForType === void 0 ? void 0 : listenersForType.delete(listener);
            if ((listenersForType === null || listenersForType === void 0 ? void 0 : listenersForType.size) === 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listenerWrappers).delete(eventType);
            }
        }
        return this;
    }
    emit(type) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        const event = new CustomEvent(type, {
            detail: args
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _target).dispatchEvent(event);
    }
    once(type, listener) {
        var _this = this;
        const handler = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            _this.off(type, handler);
            listener(...args);
        };
        this.on(type, handler);
        return this;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _target, {
            writable: true,
            value: new EventTarget()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listenerWrappers, {
            writable: true,
            value: new Map()
        });
    }
}
;
const randomUUID = ()=>{
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
const Readable = class Readable {
    pipeTo(_destination, _options) {}
    pipeThrough(_transform, _options) {}
    constructor(){}
};
const ReadableStream = globalThis.ReadableStream;
const ReadableStreamController = globalThis.ReadableStreamDefaultController;
const TransformStream = globalThis.TransformStream;
class AsyncLocalStorage {
    run(context, fn) {
        this.context = context;
        return fn();
    }
    getStore() {
        return this.context;
    }
    enterWith(context) {
        this.context = context;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "context", null);
    }
}
function isBrowserEnvironment() {
    return true;
}
function isTracingLoopRunningByDefault() {
    return false;
}
;
class BrowserTimer {
    setTimeout(callback, ms) {
        const timeout = setTimeout(callback, ms);
        timeout.ref = typeof timeout.ref === 'function' ? timeout.ref : ()=>timeout;
        timeout.unref = typeof timeout.unref === 'function' ? timeout.unref : ()=>timeout;
        timeout.hasRef = typeof timeout.hasRef === 'function' ? timeout.hasRef : ()=>true;
        timeout.refresh = typeof timeout.refresh === 'function' ? timeout.refresh : ()=>timeout;
        return timeout;
    }
    clearTimeout(timeoutId) {
        window.clearTimeout(timeoutId);
    }
    constructor(){}
}
const timer = new BrowserTimer();
;
 //# sourceMappingURL=shims-browser.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addErrorToCurrentSpan",
    ()=>addErrorToCurrentSpan,
    "cloneCurrentContext",
    ()=>cloneCurrentContext,
    "getCurrentSpan",
    ()=>getCurrentSpan,
    "getCurrentTrace",
    ()=>getCurrentTrace,
    "getOrCreateTrace",
    ()=>getOrCreateTrace,
    "resetCurrentSpan",
    ()=>resetCurrentSpan,
    "setCurrentSpan",
    ()=>setCurrentSpan,
    "withNewSpanContext",
    ()=>withNewSpanContext,
    "withTrace",
    ()=>withTrace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/provider.mjs [app-client] (ecmascript)");
;
;
let _contextAsyncLocalStorage;
function getContextAsyncLocalStorage() {
    _contextAsyncLocalStorage !== null && _contextAsyncLocalStorage !== void 0 ? _contextAsyncLocalStorage : _contextAsyncLocalStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AsyncLocalStorage"]();
    return _contextAsyncLocalStorage;
}
function getCurrentTrace() {
    const currentTrace = getContextAsyncLocalStorage().getStore();
    if (currentTrace === null || currentTrace === void 0 ? void 0 : currentTrace.trace) {
        return currentTrace.trace;
    }
    return null;
}
function getCurrentSpan() {
    const currentSpan = getContextAsyncLocalStorage().getStore();
    if (currentSpan === null || currentSpan === void 0 ? void 0 : currentSpan.span) {
        return currentSpan.span;
    }
    return null;
}
/**
 * This is an AsyncLocalStorage instance that stores the current trace.
 * It will automatically handle the execution context of different event loop executions.
 *
 * The functions below should be the only way that this context gets interfaced with.
 */ function _wrapFunctionWithTraceLifecycle(fn) {
    return async ()=>{
        const trace = getCurrentTrace();
        if (!trace) {
            throw new Error('No trace found');
        }
        await trace.start();
        const result = await fn(trace);
        await trace.end();
        return result;
    };
}
async function withTrace(trace, fn) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const newTrace = typeof trace === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createTrace({
        ...options,
        name: trace
    }) : trace;
    return getContextAsyncLocalStorage().run({
        trace: newTrace
    }, _wrapFunctionWithTraceLifecycle(fn));
}
async function getOrCreateTrace(fn) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const currentTrace = getCurrentTrace();
    if (currentTrace) {
        // if this execution context already has a trace instance in it we just continue
        return await fn();
    }
    const newTrace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createTrace(options);
    return getContextAsyncLocalStorage().run({
        trace: newTrace
    }, _wrapFunctionWithTraceLifecycle(fn));
}
function setCurrentSpan(span) {
    const context = getContextAsyncLocalStorage().getStore();
    if (!context) {
        throw new Error('No existing trace found');
    }
    if (context.span) {
        context.span.previousSpan = context.previousSpan;
        context.previousSpan = context.span;
    }
    context.span = span;
    getContextAsyncLocalStorage().enterWith(context);
}
function resetCurrentSpan() {
    const context = getContextAsyncLocalStorage().getStore();
    if (context) {
        var _context_previousSpan;
        context.span = context.previousSpan;
        context.previousSpan = (_context_previousSpan = context.previousSpan) === null || _context_previousSpan === void 0 ? void 0 : _context_previousSpan.previousSpan;
        getContextAsyncLocalStorage().enterWith(context);
    }
}
function addErrorToCurrentSpan(spanError) {
    const currentSpan = getCurrentSpan();
    if (currentSpan) {
        currentSpan.setError(spanError);
    }
}
function cloneCurrentContext(context) {
    var _context_trace, _context_span, _context_previousSpan;
    return {
        trace: (_context_trace = context.trace) === null || _context_trace === void 0 ? void 0 : _context_trace.clone(),
        span: (_context_span = context.span) === null || _context_span === void 0 ? void 0 : _context_span.clone(),
        previousSpan: (_context_previousSpan = context.previousSpan) === null || _context_previousSpan === void 0 ? void 0 : _context_previousSpan.clone()
    };
}
function withNewSpanContext(fn) {
    const currentContext = getContextAsyncLocalStorage().getStore();
    if (!currentContext) {
        throw new Error('No existing trace found');
    }
    const copyOfContext = cloneCurrentContext(currentContext);
    return getContextAsyncLocalStorage().run(copyOfContext, fn);
} //# sourceMappingURL=context.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/processor.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BatchTraceProcessor",
    ()=>BatchTraceProcessor,
    "ConsoleSpanExporter",
    ()=>ConsoleSpanExporter,
    "MultiTracingProcessor",
    ()=>MultiTracingProcessor,
    "defaultExporter",
    ()=>defaultExporter,
    "defaultProcessor",
    ()=>defaultProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/config.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class ConsoleSpanExporter {
    async export(items) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracing"].disabled) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Tracing is disabled. Skipping export');
            return;
        }
        for (const item of items){
            if (item.type === 'trace') {
                console.log("[Exporter] Export trace traceId=".concat(item.traceId, " name=").concat(item.name).concat(item.groupId ? " groupId=".concat(item.groupId) : ''));
            } else {
                console.log("[Exporter] Export span: ".concat(JSON.stringify(item)));
            }
        }
    }
}
var _maxQueueSize = /*#__PURE__*/ new WeakMap(), _maxBatchSize = /*#__PURE__*/ new WeakMap(), _scheduleDelay = /*#__PURE__*/ new WeakMap(), _exportTriggerSize = /*#__PURE__*/ new WeakMap(), _exporter = /*#__PURE__*/ new WeakMap(), _buffer = /*#__PURE__*/ new WeakMap(), _timer = /*#__PURE__*/ new WeakMap(), _timeout = /*#__PURE__*/ new WeakMap(), _exportInProgress = /*#__PURE__*/ new WeakMap(), _timeoutAbortController = /*#__PURE__*/ new WeakMap(), _safeAddItem = /*#__PURE__*/ new WeakSet(), _runExportLoop = /*#__PURE__*/ new WeakSet(), _exportBatches = /*#__PURE__*/ new WeakSet();
class BatchTraceProcessor {
    start() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeoutAbortController, new AbortController());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runExportLoop, runExportLoop).call(this);
    }
    async onTraceStart(trace) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _safeAddItem, safeAddItem).call(this, trace);
    }
    async onTraceEnd(_trace) {
    // We don't send traces on end because we already send them on start
    }
    async onSpanStart(_span) {
    // We don't send spans on start because we send them at the end
    }
    async onSpanEnd(span) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _safeAddItem, safeAddItem).call(this, span);
    }
    async shutdown(timeout) {
        if (timeout) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timer).setTimeout(()=>{
                var _class_private_field_get;
                // force shutdown the HTTP request
                (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeoutAbortController)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.abort();
            }, timeout);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Shutting down gracefully');
        while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length > 0){
            var _class_private_field_get;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Waiting for buffer to empty. Items left: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length));
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportInProgress)) {
                // no current export in progress. Forcing all items to be exported
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportBatches, exportBatches).call(this, true);
            }
            if ((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeoutAbortController)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.signal.aborted) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Timeout reached, force flushing');
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportBatches, exportBatches).call(this, true);
                break;
            }
            // using setTimeout to add to the event loop and keep this alive until done
            await new Promise((resolve)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timer).setTimeout(resolve, 500));
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Buffer empty. Exiting');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timer) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeout)) {
            // making sure there are no more requests
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timer).clearTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeout));
        }
    }
    async forceFlush() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length > 0) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportBatches, exportBatches).call(this, true);
        }
    }
    constructor(exporter, { maxQueueSize = 1000, maxBatchSize = 100, scheduleDelay = 5000, exportTriggerRatio = 0.8 } = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _safeAddItem);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runExportLoop);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportBatches);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxQueueSize, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxBatchSize, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleDelay, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportTriggerSize, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exporter, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer, {
            writable: true,
            value: []
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timer, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeout, {
            writable: true,
            value: null
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportInProgress, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeoutAbortController, {
            writable: true,
            value: null
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxQueueSize, maxQueueSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxBatchSize, maxBatchSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleDelay, scheduleDelay);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportTriggerSize, maxQueueSize * exportTriggerRatio);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exporter, exporter);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["timer"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTracingLoopRunningByDefault"])()) {
            this.start();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Automatic trace export loop is not supported in this environment. You need to manually call `getGlobalTraceProvider().forceFlush()` to export traces.');
        }
    }
}
async function safeAddItem(item) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length + 1 > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxQueueSize)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Dropping trace because buffer is full');
        return;
    }
    // add the item to the buffer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).push(item);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportTriggerSize)) {
        // start exporting immediately
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportBatches, exportBatches).call(this);
    }
}
function runExportLoop() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeout, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timer).setTimeout(async ()=>{
        // scheduled export
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportBatches, exportBatches).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runExportLoop, runExportLoop).call(this);
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleDelay)));
    // We set this so that Node no longer considers this part of the event loop and keeps the
    // process alive until the timer is done.
    if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeout).unref === 'function') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timeout).unref();
    }
}
async function exportBatches() {
    let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length === 0) {
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Exporting batches. Force: ".concat(force, ". Buffer size: ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length));
    if (force || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxBatchSize)) {
        const toExport = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer)
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportInProgress, true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exporter).export(toExport);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportInProgress, false);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length > 0) {
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).splice(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxBatchSize));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportInProgress, true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exporter).export(batch);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exportInProgress, false);
    }
}
var _processors = /*#__PURE__*/ new WeakMap();
class MultiTracingProcessor {
    start() {
        for (const processor of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors)){
            if (processor.start) {
                processor.start();
            }
        }
    }
    addTraceProcessor(processor) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors).push(processor);
    }
    setProcessors(processors) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Shutting down old processors');
        for (const processor of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors)){
            processor.shutdown();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors, processors);
    }
    async onTraceStart(trace) {
        for (const processor of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors)){
            await processor.onTraceStart(trace);
        }
    }
    async onTraceEnd(trace) {
        for (const processor of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors)){
            await processor.onTraceEnd(trace);
        }
    }
    async onSpanStart(span) {
        for (const processor of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors)){
            await processor.onSpanStart(span);
        }
    }
    async onSpanEnd(span) {
        for (const processor of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors)){
            await processor.onSpanEnd(span);
        }
    }
    async shutdown(timeout) {
        for (const processor of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors)){
            await processor.shutdown(timeout);
        }
    }
    async forceFlush() {
        for (const processor of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors)){
            await processor.forceFlush();
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processors, {
            writable: true,
            value: []
        });
    }
}
let _defaultExporter = null;
let _defaultProcessor = null;
function defaultExporter() {
    if (!_defaultExporter) {
        _defaultExporter = new ConsoleSpanExporter();
    }
    return _defaultExporter;
}
function defaultProcessor() {
    if (!_defaultProcessor) {
        _defaultProcessor = new BatchTraceProcessor(defaultExporter());
    }
    return _defaultProcessor;
} //# sourceMappingURL=processor.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateGroupId",
    ()=>generateGroupId,
    "generateSpanId",
    ()=>generateSpanId,
    "generateTraceId",
    ()=>generateTraceId,
    "removePrivateFields",
    ()=>removePrivateFields,
    "timeIso",
    ()=>timeIso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>");
;
function timeIso() {
    return new Date().toISOString();
}
function generateTraceId() {
    return "trace_".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["randomUUID"])().replace(/-/g, ''));
}
function generateSpanId() {
    return "span_".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["randomUUID"])().replace(/-/g, '').slice(0, 24));
}
function generateGroupId() {
    return "group_".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["randomUUID"])().replace(/-/g, '').slice(0, 24));
}
function removePrivateFields(obj) {
    return Object.fromEntries(Object.entries(obj).filter((param)=>{
        let [key] = param;
        return !key.startsWith('_');
    }));
} //# sourceMappingURL=utils.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/spans.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoopSpan",
    ()=>NoopSpan,
    "Span",
    ()=>Span
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
var _data = /*#__PURE__*/ new WeakMap(), _traceId = /*#__PURE__*/ new WeakMap(), _spanId = /*#__PURE__*/ new WeakMap(), _parentId = /*#__PURE__*/ new WeakMap(), _processor = /*#__PURE__*/ new WeakMap(), _startedAt = /*#__PURE__*/ new WeakMap(), _endedAt = /*#__PURE__*/ new WeakMap(), _error = /*#__PURE__*/ new WeakMap(), _previousSpan = /*#__PURE__*/ new WeakMap();
class Span {
    get traceId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _traceId);
    }
    get spanData() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _data);
    }
    get spanId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _spanId);
    }
    get parentId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentId);
    }
    get previousSpan() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _previousSpan);
    }
    set previousSpan(span) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _previousSpan, span);
    }
    start() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startedAt)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn('Span already started');
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startedAt, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeIso"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor).onSpanStart(this);
    }
    end() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _endedAt)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Span already finished', this.spanData);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _endedAt, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeIso"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor).onSpanEnd(this);
    }
    setError(error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _error, error);
    }
    get error() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _error);
    }
    get startedAt() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startedAt);
    }
    get endedAt() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _endedAt);
    }
    clone() {
        var _this_previousSpan;
        var _this_parentId, _class_private_field_get, _class_private_field_get1, _class_private_field_get2;
        const span = new Span({
            traceId: this.traceId,
            spanId: this.spanId,
            parentId: (_this_parentId = this.parentId) !== null && _this_parentId !== void 0 ? _this_parentId : undefined,
            data: this.spanData,
            startedAt: (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startedAt)) !== null && _class_private_field_get !== void 0 ? _class_private_field_get : undefined,
            endedAt: (_class_private_field_get1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _endedAt)) !== null && _class_private_field_get1 !== void 0 ? _class_private_field_get1 : undefined,
            error: (_class_private_field_get2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _error)) !== null && _class_private_field_get2 !== void 0 ? _class_private_field_get2 : undefined
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor));
        span.previousSpan = (_this_previousSpan = this.previousSpan) === null || _this_previousSpan === void 0 ? void 0 : _this_previousSpan.clone();
        return span;
    }
    toJSON() {
        return {
            object: this.type,
            id: this.spanId,
            trace_id: this.traceId,
            parent_id: this.parentId,
            started_at: this.startedAt,
            ended_at: this.endedAt,
            span_data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrivateFields"])(this.spanData),
            error: this.error
        };
    }
    constructor(options, processor){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'trace.span');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _data, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _traceId, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _spanId, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentId, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startedAt, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _endedAt, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _error, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _previousSpan, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _traceId, options.traceId);
        var _options_spanId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _spanId, (_options_spanId = options.spanId) !== null && _options_spanId !== void 0 ? _options_spanId : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _data, options.data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor, processor);
        var _options_parentId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentId, (_options_parentId = options.parentId) !== null && _options_parentId !== void 0 ? _options_parentId : null);
        var _options_error;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _error, (_options_error = options.error) !== null && _options_error !== void 0 ? _options_error : null);
        var _options_startedAt;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startedAt, (_options_startedAt = options.startedAt) !== null && _options_startedAt !== void 0 ? _options_startedAt : null);
        var _options_endedAt;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _endedAt, (_options_endedAt = options.endedAt) !== null && _options_endedAt !== void 0 ? _options_endedAt : null);
    }
}
class NoopSpan extends Span {
    start() {
        return;
    }
    end() {
        return;
    }
    setError() {
        return;
    }
    toJSON() {
        return null;
    }
    constructor(data, processor){
        super({
            traceId: 'no-op',
            spanId: 'no-op',
            data
        }, processor);
    }
} //# sourceMappingURL=spans.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/traces.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoopTrace",
    ()=>NoopTrace,
    "Trace",
    ()=>Trace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$processor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/processor.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
var _processor = /*#__PURE__*/ new WeakMap(), _started = /*#__PURE__*/ new WeakMap();
class Trace {
    async start() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _started)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _started, true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor).onTraceStart(this);
    }
    async end() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _started)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _started, false);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor).onTraceEnd(this);
    }
    clone() {
        var _this_groupId;
        return new Trace({
            traceId: this.traceId,
            name: this.name,
            groupId: (_this_groupId = this.groupId) !== null && _this_groupId !== void 0 ? _this_groupId : undefined,
            metadata: this.metadata,
            started: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _started)
        });
    }
    toJSON() {
        return {
            object: this.type,
            id: this.traceId,
            workflow_name: this.name,
            group_id: this.groupId,
            metadata: this.metadata
        };
    }
    constructor(options, processor){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'trace');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "traceId", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "groupId", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "metadata", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _started, {
            writable: true,
            value: void 0
        });
        var _options_traceId;
        this.traceId = (_options_traceId = options.traceId) !== null && _options_traceId !== void 0 ? _options_traceId : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])();
        var _options_name;
        this.name = (_options_name = options.name) !== null && _options_name !== void 0 ? _options_name : 'Agent workflow';
        var _options_groupId;
        this.groupId = (_options_groupId = options.groupId) !== null && _options_groupId !== void 0 ? _options_groupId : null;
        var _options_metadata;
        this.metadata = (_options_metadata = options.metadata) !== null && _options_metadata !== void 0 ? _options_metadata : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processor, processor !== null && processor !== void 0 ? processor : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$processor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultProcessor"])());
        var _options_started;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _started, (_options_started = options.started) !== null && _options_started !== void 0 ? _options_started : false);
    }
}
class NoopTrace extends Trace {
    async start() {
        return;
    }
    async end() {
        return;
    }
    toJSON() {
        return null;
    }
    constructor(){
        super({});
    }
} //# sourceMappingURL=traces.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/provider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraceProvider",
    ()=>TraceProvider,
    "getGlobalTraceProvider",
    ()=>getGlobalTraceProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$processor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/processor.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/spans.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$traces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/traces.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
var _multiProcessor = /*#__PURE__*/ new WeakMap(), _disabled = /*#__PURE__*/ new WeakMap(), /** Adds listeners to `process` to ensure `shutdown` occurs before exit. */ _addCleanupListeners = /*#__PURE__*/ new WeakSet();
class TraceProvider {
    /**
     * Add a processor to the list of processors. Each processor will receive all traces/spans.
     *
     * @param processor - The processor to add.
     */ registerProcessor(processor) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor).addTraceProcessor(processor);
    }
    /**
     * Set the list of processors. This will replace any existing processors.
     *
     * @param processors - The list of processors to set.
     */ setProcessors(processors) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor).setProcessors(processors);
    }
    /**
     * Get the current trace.
     *
     * @returns The current trace.
     */ getCurrentTrace() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentTrace"])();
    }
    getCurrentSpan() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSpan"])();
    }
    setDisabled(disabled) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disabled, disabled);
    }
    startExportLoop() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor).start();
    }
    createTrace(traceOptions) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disabled)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Tracing is disabled, Not creating trace %o', traceOptions);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$traces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopTrace"]();
        }
        var _traceOptions_traceId;
        const traceId = (_traceOptions_traceId = traceOptions.traceId) !== null && _traceOptions_traceId !== void 0 ? _traceOptions_traceId : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])();
        var _traceOptions_name;
        const name = (_traceOptions_name = traceOptions.name) !== null && _traceOptions_name !== void 0 ? _traceOptions_name : 'Agent workflow';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Creating trace %s with name %s', traceId, name);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$traces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trace"]({
            ...traceOptions,
            name,
            traceId
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor));
    }
    createSpan(spanOptions, parent) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disabled) || spanOptions.disabled) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Tracing is disabled, Not creating span %o', spanOptions);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopSpan"](spanOptions.data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor));
        }
        let parentId;
        let traceId;
        if (!parent) {
            const currentTrace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentTrace"])();
            const currentSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSpan"])();
            if (!currentTrace) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('No active trace. Make sure to start a trace with `withTrace()` first. Returning NoopSpan.');
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopSpan"](spanOptions.data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor));
            }
            if (currentSpan instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopSpan"] || currentTrace instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$traces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopTrace"]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Parent ".concat(currentSpan, " or ").concat(currentTrace, " is no-op, returning NoopSpan"));
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopSpan"](spanOptions.data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor));
            }
            traceId = currentTrace.traceId;
            if (currentSpan) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Using parent span %s', currentSpan.spanId);
                parentId = currentSpan.spanId;
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('No parent span, using current trace %s', currentTrace.traceId);
            }
        } else if (parent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$traces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trace"]) {
            if (parent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$traces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopTrace"]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Parent trace is no-op, returning NoopSpan');
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopSpan"](spanOptions.data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor));
            }
            traceId = parent.traceId;
        } else if (parent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Span"]) {
            if (parent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopSpan"]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Parent span is no-op, returning NoopSpan');
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopSpan"](spanOptions.data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor));
            }
            parentId = parent.spanId;
            traceId = parent.traceId;
        }
        if (!traceId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('No traceId found. Make sure to start a trace with `withTrace()` first. Returning NoopSpan.');
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopSpan"](spanOptions.data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor));
        }
        var _spanOptions_spanId;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Creating span ".concat(JSON.stringify(spanOptions.data), " with id ").concat((_spanOptions_spanId = spanOptions.spanId) !== null && _spanOptions_spanId !== void 0 ? _spanOptions_spanId : traceId));
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Span"]({
            ...spanOptions,
            traceId,
            parentId
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor));
    }
    async shutdown(timeout) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Shutting down tracing provider');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor).shutdown(timeout);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Error shutting down tracing provider %o', error);
        }
    }
    async forceFlush() {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor).forceFlush();
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addCleanupListeners);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disabled, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _multiProcessor, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$processor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiTracingProcessor"]());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disabled, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracing"].disabled);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addCleanupListeners, addCleanupListeners).call(this);
    }
}
function addCleanupListeners() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on === 'function') {
        // handling Node.js process termination
        const cleanup = async ()=>{
            const timeout = setTimeout(()=>{
                console.warn('Cleanup timeout, forcing exit');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(1);
            }, 5000);
            try {
                await this.shutdown();
            } finally{
                clearTimeout(timeout);
            }
        };
        // Handle normal termination
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on('beforeExit', cleanup);
        // Handle CTRL+C (SIGINT)
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on('SIGINT', async ()=>{
            await cleanup();
            if (!hasOtherListenersForSignals('SIGINT')) {
                // Only when there are no other listeners, exit the process on this SDK side
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(130);
            }
        });
        // Handle termination (SIGTERM)
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on('SIGTERM', async ()=>{
            await cleanup();
            if (!hasOtherListenersForSignals('SIGTERM')) {
                // Only when there are no other listeners, exit the process on this SDK side
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(0);
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on('unhandledRejection', async (reason, promise)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Unhandled rejection', reason, promise);
            await cleanup();
            if (!hasOtherListenersForEvents('unhandledRejection')) {
                // Only when there are no other listeners, exit the process on this SDK side
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(1);
            }
        });
    }
}
function hasOtherListenersForSignals(event) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].listeners(event).length > 1;
}
function hasOtherListenersForEvents(event) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].listeners(event).length > 1;
}
let GLOBAL_TRACE_PROVIDER = undefined;
function getGlobalTraceProvider() {
    if (!GLOBAL_TRACE_PROVIDER) {
        GLOBAL_TRACE_PROVIDER = new TraceProvider();
    }
    return GLOBAL_TRACE_PROVIDER;
} //# sourceMappingURL=provider.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTraceProcessor",
    ()=>addTraceProcessor,
    "setTraceProcessors",
    ()=>setTraceProcessors,
    "setTracingDisabled",
    ()=>setTracingDisabled,
    "startTraceExportLoop",
    ()=>startTraceExportLoop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/provider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/createSpans.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$processor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/processor.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$spans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/spans.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$traces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/traces.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
function addTraceProcessor(processor) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().registerProcessor(processor);
}
function setTraceProcessors(processors) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().setProcessors(processors);
}
function setTracingDisabled(disabled) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().setDisabled(disabled);
}
function startTraceExportLoop() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().startExportLoop();
} //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/lifecycle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentHooks",
    ()=>AgentHooks,
    "EventEmitterDelegate",
    ()=>EventEmitterDelegate,
    "RunHooks",
    ()=>RunHooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>");
;
;
class EventEmitterDelegate {
    on(type, listener) {
        this.eventEmitter.on(type, listener);
        return this.eventEmitter;
    }
    off(type, listener) {
        this.eventEmitter.off(type, listener);
        return this.eventEmitter;
    }
    emit(type) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return this.eventEmitter.emit(type, ...args);
    }
    once(type, listener) {
        this.eventEmitter.once(type, listener);
        return this.eventEmitter;
    }
}
class AgentHooks extends EventEmitterDelegate {
    constructor(...args){
        super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "eventEmitter", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RuntimeEventEmitter"]());
    }
}
class RunHooks extends EventEmitterDelegate {
    constructor(...args){
        super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "eventEmitter", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RuntimeEventEmitter"]());
    }
} //# sourceMappingURL=lifecycle.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/defaultModel.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME",
    ()=>OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME,
    "getDefaultModel",
    ()=>getDefaultModel,
    "getDefaultModelSettings",
    ()=>getDefaultModelSettings,
    "gpt5ReasoningSettingsRequired",
    ()=>gpt5ReasoningSettingsRequired,
    "isGpt5Default",
    ()=>isGpt5Default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/config.mjs [app-client] (ecmascript)");
;
const OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME = 'OPENAI_DEFAULT_MODEL';
function gpt5ReasoningSettingsRequired(modelName) {
    if (modelName.startsWith('gpt-5-chat')) {
        // gpt-5-chat-latest does not require reasoning settings
        return false;
    }
    // matches any of gpt-5 models
    return modelName.startsWith('gpt-5');
}
function isGpt5Default() {
    return gpt5ReasoningSettingsRequired(getDefaultModel());
}
function getDefaultModel() {
    var _env_OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME;
    const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadEnv"])();
    var _env_OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME_toLowerCase;
    return (_env_OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME_toLowerCase = (_env_OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME = env[OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME]) === null || _env_OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME === void 0 ? void 0 : _env_OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME.toLowerCase()) !== null && _env_OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME_toLowerCase !== void 0 ? _env_OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME_toLowerCase : 'gpt-4.1';
}
function getDefaultModelSettings(model) {
    const _model = model !== null && model !== void 0 ? model : getDefaultModel();
    if (gpt5ReasoningSettingsRequired(_model)) {
        return {
            // We chose "low" instead of "minimal" because some of the built-in tools
            // (e.g., file search, image generation, etc.) do not support "minimal"
            // If you want to use "minimal" reasoning effort, you can pass your own model settings
            reasoning: {
                effort: 'low'
            },
            text: {
                verbosity: 'low'
            }
        };
    }
    return {};
} //# sourceMappingURL=defaultModel.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/guardrail.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Defines an input guardrail definition.
 */ __turbopack_context__.s([
    "defineInputGuardrail",
    ()=>defineInputGuardrail,
    "defineOutputGuardrail",
    ()=>defineOutputGuardrail
]);
function defineInputGuardrail(param) {
    let { name, execute } = param;
    return {
        type: 'input',
        name,
        guardrailFunction: execute,
        async run (args) {
            return {
                guardrail: {
                    type: 'input',
                    name
                },
                output: await execute(args)
            };
        }
    };
}
function defineOutputGuardrail(param) {
    let { name, execute } = param;
    return {
        type: 'output',
        name,
        guardrailFunction: execute,
        async run (args) {
            return {
                guardrail: {
                    type: 'output',
                    name
                },
                agent: args.agent,
                agentOutput: args.agentOutput,
                output: await execute(args)
            };
        }
    };
} //# sourceMappingURL=guardrail.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/handoff.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Handoff",
    ()=>Handoff,
    "getHandoff",
    ()=>getHandoff,
    "getTransferMessage",
    ()=>getTransferMessage,
    "handoff",
    ()=>handoff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/tools.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
function getTransferMessage(agent) {
    return JSON.stringify({
        assistant: agent.name
    });
}
/**
 * The default name of the tool that represents the handoff.
 *
 * @param agent The agent to transfer to
 * @returns The name of the tool that represents the handoff
 */ function defaultHandoffToolName(agent) {
    return "transfer_to_".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFunctionToolName"])(agent.name));
}
/**
 * Generates the description of the tool that represents the handoff.
 *
 * @param agent The agent to transfer to
 * @returns The description of the tool that represents the handoff
 */ function defaultHandoffToolDescription(agent) {
    var _agent_handoffDescription;
    return "Handoff to the ".concat(agent.name, " agent to handle the request. ").concat((_agent_handoffDescription = agent.handoffDescription) !== null && _agent_handoffDescription !== void 0 ? _agent_handoffDescription : '');
}
class Handoff {
    /**
     * Returns a function tool definition that can be used to invoke the handoff.
     */ getHandoffAsFunctionTool() {
        return {
            type: 'function',
            name: this.toolName,
            description: this.toolDescription,
            parameters: this.inputJsonSchema,
            strict: this.strictJsonSchema
        };
    }
    constructor(agent, onInvokeHandoff){
        /**
     * The name of the tool that represents the handoff.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "toolName", void 0);
        /**
     * The description of the tool that represents the handoff.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "toolDescription", void 0);
        /**
     * The JSON schema for the handoff input. Can be empty if the handoff does not take an input
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inputJsonSchema", {
            type: 'object',
            properties: {},
            required: [],
            additionalProperties: false
        });
        /**
     * Whether the input JSON schema is in strict mode. We **strongly** recommend setting this to
     * true, as it increases the likelihood of correct JSON input.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "strictJsonSchema", true);
        /**
     * The function that invokes the handoff. The parameters passed are:
     * 1. The handoff run context
     * 2. The arguments from the LLM, as a JSON string. Empty string if inputJsonSchema is empty.
     *
     * Must return an agent
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onInvokeHandoff", void 0);
        /**
     * The name of the agent that is being handed off to.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agentName", void 0);
        /**
     * A function that filters the inputs that are passed to the next agent. By default, the new agent
     * sees the entire conversation history. In some cases, you may want to filter inputs e.g. to
     * remove older inputs, or remove tools from existing inputs.
     *
     * The function will receive the entire conversation hisstory so far, including the input item
     * that triggered the handoff and a tool call output item representing the handoff tool's output.
     *
     * You are free to modify the input history or new items as you see fit. The next agent that runs
     * will receive `handoffInputData.allItems
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inputFilter", void 0);
        /**
     * The agent that is being handed off to.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0);
        this.agentName = agent.name;
        this.onInvokeHandoff = onInvokeHandoff;
        this.toolName = defaultHandoffToolName(agent);
        this.toolDescription = defaultHandoffToolDescription(agent);
        this.agent = agent;
    }
}
function handoff(agent) {
    let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let parser = undefined;
    const hasOnHandoff = !!config.onHandoff;
    const hasInputType = !!config.inputType;
    const hasBothOrNeitherHandoffAndInputType = hasOnHandoff === hasInputType;
    if (!hasBothOrNeitherHandoffAndInputType) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]('You must provide either both `onHandoff` and `inputType` or neither.');
    }
    async function onInvokeHandoff(context, inputJsonString) {
        if (parser) {
            if (!inputJsonString) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addErrorToCurrentSpan"])({
                    message: "Handoff function expected non empty input but got: ".concat(inputJsonString),
                    data: {
                        details: "input is empty"
                    }
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"]('Handoff function expected non empty input');
            }
            try {
                // verify that it's valid input but we don't care about the result
                const parsed = await parser(inputJsonString);
                if (config.onHandoff) {
                    await config.onHandoff(context, parsed);
                }
            } catch (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addErrorToCurrentSpan"])({
                    message: "Invalid JSON provided",
                    data: {}
                });
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dontLogToolData) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Invalid JSON when parsing: ".concat(inputJsonString, ". Error: ").concat(error));
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"]('Invalid JSON provided');
            }
        } else {
            var _config_onHandoff;
            await ((_config_onHandoff = config.onHandoff) === null || _config_onHandoff === void 0 ? void 0 : _config_onHandoff.call(config, context));
        }
        return agent;
    }
    const handoff = new Handoff(agent, onInvokeHandoff);
    if (config.inputType) {
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaAndParserFromInputType"])(config.inputType, handoff.toolName);
        handoff.inputJsonSchema = result.schema;
        handoff.strictJsonSchema = true;
        parser = result.parser;
    }
    if (config.toolNameOverride) {
        handoff.toolName = config.toolNameOverride;
    }
    if (config.toolDescriptionOverride) {
        handoff.toolDescription = config.toolDescriptionOverride;
    }
    if (config.inputFilter) {
        handoff.inputFilter = config.inputFilter;
    }
    return handoff;
}
function getHandoff(agent) {
    if (agent instanceof Handoff) {
        return agent;
    }
    return handoff(agent);
} //# sourceMappingURL=handoff.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/providers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultModelProvider",
    ()=>getDefaultModelProvider,
    "setDefaultModelProvider",
    ()=>setDefaultModelProvider
]);
let DEFAULT_PROVIDER;
function setDefaultModelProvider(provider) {
    DEFAULT_PROVIDER = provider;
}
function getDefaultModelProvider() {
    if (typeof DEFAULT_PROVIDER === 'undefined') {
        throw new Error('No default model provider set. Make sure to set a provider using setDefaultModelProvider before calling getDefaultModelProvider or pass an explicit provider.');
    }
    return DEFAULT_PROVIDER;
} //# sourceMappingURL=providers.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/types/protocol.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssistantContent",
    ()=>AssistantContent,
    "AssistantMessageItem",
    ()=>AssistantMessageItem,
    "AudioContent",
    ()=>AudioContent,
    "ComputerCallResultItem",
    ()=>ComputerCallResultItem,
    "ComputerToolOutput",
    ()=>ComputerToolOutput,
    "ComputerUseCallItem",
    ()=>ComputerUseCallItem,
    "FunctionCallItem",
    ()=>FunctionCallItem,
    "FunctionCallResultItem",
    ()=>FunctionCallResultItem,
    "HostedToolCallItem",
    ()=>HostedToolCallItem,
    "ImageContent",
    ()=>ImageContent,
    "InputFile",
    ()=>InputFile,
    "InputImage",
    ()=>InputImage,
    "InputText",
    ()=>InputText,
    "ItemBase",
    ()=>ItemBase,
    "MessageItem",
    ()=>MessageItem,
    "ModelItem",
    ()=>ModelItem,
    "OutputModelItem",
    ()=>OutputModelItem,
    "OutputText",
    ()=>OutputText,
    "ReasoningItem",
    ()=>ReasoningItem,
    "ReasoningText",
    ()=>ReasoningText,
    "Refusal",
    ()=>Refusal,
    "SharedBase",
    ()=>SharedBase,
    "StreamEvent",
    ()=>StreamEvent,
    "StreamEventGenericItem",
    ()=>StreamEventGenericItem,
    "StreamEventResponseCompleted",
    ()=>StreamEventResponseCompleted,
    "StreamEventResponseStarted",
    ()=>StreamEventResponseStarted,
    "StreamEventTextStream",
    ()=>StreamEventTextStream,
    "ToolCallItem",
    ()=>ToolCallItem,
    "ToolOutputImage",
    ()=>ToolOutputImage,
    "ToolOutputText",
    ()=>ToolOutputText,
    "UnknownItem",
    ()=>UnknownItem,
    "UsageData",
    ()=>UsageData,
    "UserContent",
    ()=>UserContent,
    "UserMessageItem",
    ()=>UserMessageItem,
    "computerActions",
    ()=>computerActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
const SharedBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
     * Additional optional provider specific data. Used for custom functionality or model provider
     * specific fields.
     */ providerData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()).optional()
});
const ItemBase = SharedBase.extend({
    /**
     * An ID to identify the item. This is optional by default. If a model provider absolutely
     * requires this field, it will be validated on the model level.
     */ id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const Refusal = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('refusal'),
    /**
     * The refusal explanation from the model.
     */ refusal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const OutputText = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('output_text'),
    /**
     * The text output from the model.
     */ text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const InputText = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('input_text'),
    /**
     * A text input for example a message from a user
     */ text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const ReasoningText = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('reasoning_text'),
    /**
     * A text input for example a message from a user
     */ text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const InputImage = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('input_image'),
    /**
     * The image input to the model. Could be a URL, base64 or an object with a file ID.
     */ image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).describe('Could be a URL, base64 or an object with a file ID.')
});
const InputFile = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('input_file'),
    /**
     * The file input to the model. Could be a URL, base64 or an object with a file ID.
     */ file: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Either base64 encoded file data or a publicly accessible file URL').or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('OpenAI file ID')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Publicly accessible PDF file URL')
    })).describe('Contents of the file or an object with a file ID.')
});
const AudioContent = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('audio'),
    /**
     * The audio input to the model. Could be base64 encoded audio data or an object with a file ID.
     */ audio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).describe('Base64 encoded audio data or file id'),
    /**
     * The format of the audio.
     */ format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    /**
     * The transcript of the audio.
     */ transcript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const ImageContent = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('image'),
    /**
     * The image input to the model. Could be base64 encoded image data or an object with a file ID.
     */ image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Base64 encoded image data')
});
const ToolOutputText = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('text'),
    /**
     * The text output from the model.
     */ text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const ToolOutputImage = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('image'),
    /**
     * The image data. Could be base64 encoded image data or an object with a file ID.
     */ data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Base64 encoded image data'),
    /**
     * The media type of the image.
     */ mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('IANA media type of the image')
});
const ComputerToolOutput = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('computer_screenshot'),
    /**
     * A base64 encoded image data or a URL representing the screenshot.
     */ data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Base64 encoded image data or URL')
});
const computerActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('screenshot')
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('click'),
        x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        button: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'left',
            'right',
            'wheel',
            'back',
            'forward'
        ])
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('double_click'),
        x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('scroll'),
        x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        scroll_x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        scroll_y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('type'),
        text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('wait')
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('move'),
        x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('keypress'),
        keys: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('drag'),
        path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }))
    })
]);
const AssistantContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    OutputText,
    Refusal,
    AudioContent,
    ImageContent
]);
const MessageBase = ItemBase.extend({
    /**
     * Any item without a type is treated as a message
     */ type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('message').optional()
});
const AssistantMessageItem = MessageBase.extend({
    /**
     * Representing a message from the assistant (i.e. the model)
     */ role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('assistant'),
    /**
     * The status of the message.
     */ status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'in_progress',
        'completed',
        'incomplete'
    ]),
    /**
     * The content of the message.
     */ content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(AssistantContent)
});
const UserContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    InputText,
    InputImage,
    InputFile,
    AudioContent
]);
const UserMessageItem = MessageBase.extend({
    // type: z.literal('message'),
    /**
     * Representing a message from the user
     */ role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('user'),
    /**
     * The content of the message.
     */ content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(UserContent).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
});
const SystemMessageItem = MessageBase.extend({
    // type: z.literal('message'),
    /**
     * Representing a system message to the user
     */ role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('system'),
    /**
     * The content of the message.
     */ content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const MessageItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('role', [
    SystemMessageItem,
    AssistantMessageItem,
    UserMessageItem
]);
const HostedToolCallItem = ItemBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('hosted_tool_call'),
    /**
     * The name of the hosted tool. For example `web_search_call` or `file_search_call`
     */ name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The name of the hosted tool'),
    /**
     * The arguments of the hosted tool call.
     */ arguments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The arguments of the hosted tool call').optional(),
    /**
     * The status of the tool call.
     */ status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /**
     * The primary output of the tool call. Additional output might be in the `providerData` field.
     */ output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const FunctionCallItem = ItemBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('function_call'),
    /**
     * The ID of the tool call. Required to match up the respective tool call result.
     */ callId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The ID of the tool call'),
    /**
     * The name of the function.
     */ name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The name of the function'),
    /**
     * The status of the function call.
     */ status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'in_progress',
        'completed',
        'incomplete'
    ]).optional(),
    /**
     * The arguments of the function call.
     */ arguments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const FunctionCallResultItem = ItemBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('function_call_result'),
    /**
     * The name of the tool that was called
     */ name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The name of the tool'),
    /**
     * The ID of the tool call. Required to match up the respective tool call result.
     */ callId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The ID of the tool call'),
    /**
     * The status of the tool call.
     */ status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'in_progress',
        'completed',
        'incomplete'
    ]),
    /**
     * The output of the tool call.
     */ output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
        ToolOutputText,
        ToolOutputImage
    ])
});
const ComputerUseCallItem = ItemBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('computer_call'),
    /**
     * The ID of the computer call. Required to match up the respective computer call result.
     */ callId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The ID of the computer call'),
    /**
     * The status of the computer call.
     */ status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'in_progress',
        'completed',
        'incomplete'
    ]),
    /**
     * The action to be performed by the computer.
     */ action: computerActions
});
const ComputerCallResultItem = ItemBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('computer_call_result'),
    /**
     * The ID of the computer call. Required to match up the respective computer call result.
     */ callId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The ID of the computer call'),
    /**
     * The output of the computer call.
     */ output: ComputerToolOutput
});
const ToolCallItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    ComputerUseCallItem,
    FunctionCallItem,
    HostedToolCallItem
]);
const ReasoningItem = SharedBase.extend({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('reasoning'),
    /**
     * The user facing representation of the reasoning. Additional information might be in the `providerData` field.
     */ content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(InputText),
    /**
     * The raw reasoning text from the model.
     */ rawContent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ReasoningText).optional()
});
const UnknownItem = ItemBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('unknown')
});
const OutputModelItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    AssistantMessageItem,
    HostedToolCallItem,
    FunctionCallItem,
    ComputerUseCallItem,
    ReasoningItem,
    UnknownItem
]);
const ModelItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    UserMessageItem,
    AssistantMessageItem,
    SystemMessageItem,
    HostedToolCallItem,
    FunctionCallItem,
    ComputerUseCallItem,
    FunctionCallResultItem,
    ComputerCallResultItem,
    ReasoningItem,
    UnknownItem
]);
const UsageData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    requests: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    inputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    outputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    inputTokensDetails: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()).optional(),
    outputTokensDetails: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()).optional()
});
const StreamEventTextStream = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('output_text_delta'),
    /**
     * The delta text that was streamed by the modelto the user.
     */ delta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const StreamEventResponseStarted = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('response_started')
});
const StreamEventResponseCompleted = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('response_done'),
    /**
     * The response from the model.
     */ response: SharedBase.extend({
        /**
         * The ID of the response.
         */ id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        /**
         * The usage data for the response.
         */ usage: UsageData,
        /**
         * The output from the model.
         */ output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(OutputModelItem)
    })
});
const StreamEventGenericItem = SharedBase.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('model'),
    event: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().describe('The event from the model')
});
const StreamEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    StreamEventTextStream,
    StreamEventResponseCompleted,
    StreamEventResponseStarted,
    StreamEventGenericItem
]); //# sourceMappingURL=protocol.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/usage.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Usage",
    ()=>Usage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/types/protocol.mjs [app-client] (ecmascript)");
;
;
class Usage {
    add(newUsage) {
        this.requests += newUsage.requests;
        this.inputTokens += newUsage.inputTokens;
        this.outputTokens += newUsage.outputTokens;
        this.totalTokens += newUsage.totalTokens;
        if (newUsage.inputTokensDetails) {
            // The type does not allow undefined, but it could happen runtime
            this.inputTokensDetails.push(...newUsage.inputTokensDetails);
        }
        if (newUsage.outputTokensDetails) {
            // The type does not allow undefined, but it could happen runtime
            this.outputTokensDetails.push(...newUsage.outputTokensDetails);
        }
    }
    constructor(input){
        /**
     * The number of requests made to the LLM API.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "requests", void 0);
        /**
     * The number of input tokens used across all requests.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inputTokens", void 0);
        /**
     * The number of output tokens used across all requests.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "outputTokens", void 0);
        /**
     * The total number of tokens sent and received, across all requests.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "totalTokens", void 0);
        /**
     * Details about the input tokens used across all requests.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inputTokensDetails", []);
        /**
     * Details about the output tokens used across all requests.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "outputTokensDetails", []);
        if (typeof input === 'undefined') {
            this.requests = 0;
            this.inputTokens = 0;
            this.outputTokens = 0;
            this.totalTokens = 0;
            this.inputTokensDetails = [];
            this.outputTokensDetails = [];
        } else {
            var _input_requests;
            this.requests = (_input_requests = input === null || input === void 0 ? void 0 : input.requests) !== null && _input_requests !== void 0 ? _input_requests : 1;
            var _input_inputTokens, _ref;
            this.inputTokens = (_ref = (_input_inputTokens = input === null || input === void 0 ? void 0 : input.inputTokens) !== null && _input_inputTokens !== void 0 ? _input_inputTokens : input === null || input === void 0 ? void 0 : input.input_tokens) !== null && _ref !== void 0 ? _ref : 0;
            var _input_outputTokens, _ref1;
            this.outputTokens = (_ref1 = (_input_outputTokens = input === null || input === void 0 ? void 0 : input.outputTokens) !== null && _input_outputTokens !== void 0 ? _input_outputTokens : input === null || input === void 0 ? void 0 : input.output_tokens) !== null && _ref1 !== void 0 ? _ref1 : 0;
            var _input_totalTokens, _ref2;
            this.totalTokens = (_ref2 = (_input_totalTokens = input === null || input === void 0 ? void 0 : input.totalTokens) !== null && _input_totalTokens !== void 0 ? _input_totalTokens : input === null || input === void 0 ? void 0 : input.total_tokens) !== null && _ref2 !== void 0 ? _ref2 : 0;
            var _input_inputTokensDetails;
            const inputTokensDetails = (_input_inputTokensDetails = input === null || input === void 0 ? void 0 : input.inputTokensDetails) !== null && _input_inputTokensDetails !== void 0 ? _input_inputTokensDetails : input === null || input === void 0 ? void 0 : input.input_tokens_details;
            this.inputTokensDetails = inputTokensDetails ? [
                inputTokensDetails
            ] : [];
            var _input_outputTokensDetails;
            const outputTokensDetails = (_input_outputTokensDetails = input === null || input === void 0 ? void 0 : input.outputTokensDetails) !== null && _input_outputTokensDetails !== void 0 ? _input_outputTokensDetails : input === null || input === void 0 ? void 0 : input.output_tokens_details;
            this.outputTokensDetails = outputTokensDetails ? [
                outputTokensDetails
            ] : [];
        }
    }
}
;
 //# sourceMappingURL=usage.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RunContext",
    ()=>RunContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$usage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/usage.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
var /**
     * A map of tool names to whether they have been approved.
     */ _approvals = /*#__PURE__*/ new WeakMap();
class RunContext {
    /**
     * Rebuild the approvals map from a serialized state.
     * @internal
     *
     * @param approvals - The approvals map to rebuild.
     */ _rebuildApprovals(approvals) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals, new Map(Object.entries(approvals)));
    }
    /**
     * Check if a tool call has been approved.
     *
     * @param toolName - The name of the tool.
     * @param callId - The call ID of the tool call.
     * @returns `true` if the tool call has been approved, `false` if blocked and `undefined` if not yet approved or rejected.
     */ isToolApproved(param) {
        let { toolName, callId } = param;
        const approvalEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals).get(toolName);
        if ((approvalEntry === null || approvalEntry === void 0 ? void 0 : approvalEntry.approved) === true && approvalEntry.rejected === true) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn('Tool is permanently approved and rejected at the same time. Approval takes precedence');
            return true;
        }
        if ((approvalEntry === null || approvalEntry === void 0 ? void 0 : approvalEntry.approved) === true) {
            return true;
        }
        if ((approvalEntry === null || approvalEntry === void 0 ? void 0 : approvalEntry.rejected) === true) {
            return false;
        }
        const individualCallApproval = Array.isArray(approvalEntry === null || approvalEntry === void 0 ? void 0 : approvalEntry.approved) ? approvalEntry.approved.includes(callId) : false;
        const individualCallRejection = Array.isArray(approvalEntry === null || approvalEntry === void 0 ? void 0 : approvalEntry.rejected) ? approvalEntry.rejected.includes(callId) : false;
        if (individualCallApproval && individualCallRejection) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn("Tool call ".concat(callId, " is both approved and rejected at the same time. Approval takes precedence"));
            return true;
        }
        if (individualCallApproval) {
            return true;
        }
        if (individualCallRejection) {
            return false;
        }
        return undefined;
    }
    /**
     * Approve a tool call.
     *
     * @param toolName - The name of the tool.
     * @param callId - The call ID of the tool call.
     */ approveTool(approvalItem) {
        let { alwaysApprove = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const toolName = approvalItem.rawItem.name;
        if (alwaysApprove) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals).set(toolName, {
                approved: true,
                rejected: []
            });
            return;
        }
        var _class_private_field_get_get;
        const approvalEntry = (_class_private_field_get_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals).get(toolName)) !== null && _class_private_field_get_get !== void 0 ? _class_private_field_get_get : {
            approved: [],
            rejected: []
        };
        if (Array.isArray(approvalEntry.approved)) {
            // function tool has call_id, hosted tool call has id
            const callId = 'callId' in approvalItem.rawItem ? approvalItem.rawItem.callId // function tools
             : approvalItem.rawItem.id; // hosted tools
            approvalEntry.approved.push(callId);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals).set(toolName, approvalEntry);
    }
    /**
     * Reject a tool call.
     *
     * @param approvalItem - The tool approval item to reject.
     */ rejectTool(approvalItem) {
        let { alwaysReject = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const toolName = approvalItem.rawItem.name;
        if (alwaysReject) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals).set(toolName, {
                approved: false,
                rejected: true
            });
            return;
        }
        var _class_private_field_get_get;
        const approvalEntry = (_class_private_field_get_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals).get(toolName)) !== null && _class_private_field_get_get !== void 0 ? _class_private_field_get_get : {
            approved: [],
            rejected: []
        };
        if (Array.isArray(approvalEntry.rejected)) {
            // function tool has call_id, hosted tool call has id
            const callId = 'callId' in approvalItem.rawItem ? approvalItem.rawItem.callId // function tools
             : approvalItem.rawItem.id; // hosted tools
            approvalEntry.rejected.push(callId);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals).set(toolName, approvalEntry);
    }
    toJSON() {
        return {
            context: this.context,
            usage: this.usage,
            approvals: Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals).entries())
        };
    }
    constructor(context = {}){
        /**
     * The context object you passed to the `Runner.run()` method.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "context", void 0);
        /**
     * The usage of the agent run so far. For streamed responses, the usage will be stale until the
     * last chunk of the stream is processed.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "usage", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals, {
            writable: true,
            value: void 0
        });
        this.context = context;
        this.usage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$usage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Usage"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _approvals, new Map());
    }
} //# sourceMappingURL=runContext.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/result.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RunResult",
    ()=>RunResult,
    "StreamedRunResult",
    ()=>StreamedRunResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$run$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/run.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/types/protocol.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class RunResultBase {
    /**
     * The history of the agent run. This includes the input items and the new items generated during
     * the agent run.
     *
     * This can be used as inputs for the next agent run.
     */ get history() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$run$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTurnInput"])(this.input, this.newItems);
    }
    /**
     * The new items generated during the agent run. These include things like new messages, tool
     * calls and their outputs, etc.
     *
     * It does not include information about the agents and instead represents the model data.
     *
     * For the output including the agents, use the `newItems` property.
     */ get output() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$run$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTurnInput"])([], this.newItems);
    }
    /**
     * A copy of the original input items.
     */ get input() {
        return this.state._originalInput;
    }
    /**
     * The run items generated during the agent run. This associates the model data with the agents.
     *
     * For the model data that can be used as inputs for the next agent run, use the `output` property.
     */ get newItems() {
        return this.state._generatedItems;
    }
    /**
     * The raw LLM responses generated by the model during the agent run.
     */ get rawResponses() {
        return this.state._modelResponses;
    }
    /**
     * The last response ID generated by the model during the agent run.
     */ get lastResponseId() {
        const responses = this.rawResponses;
        return responses && responses.length > 0 ? responses[responses.length - 1].responseId : undefined;
    }
    /**
     * The last agent that was run
     */ get lastAgent() {
        return this.state._currentAgent;
    }
    /**
     * Guardrail results for the input messages.
     */ get inputGuardrailResults() {
        return this.state._inputGuardrailResults;
    }
    /**
     * Guardrail results for the final output of the agent.
     */ get outputGuardrailResults() {
        return this.state._outputGuardrailResults;
    }
    /**
     * Any interruptions that occurred during the agent run for example for tool approvals.
     */ get interruptions() {
        var _this_state__currentStep;
        if (((_this_state__currentStep = this.state._currentStep) === null || _this_state__currentStep === void 0 ? void 0 : _this_state__currentStep.type) === 'next_step_interruption') {
            return this.state._currentStep.data.interruptions;
        }
        return [];
    }
    /**
     * The final output of the agent. If the output type was set to anything other than `text`,
     * this will be parsed either as JSON or using the Zod schema you provided.
     */ get finalOutput() {
        var _this_state__currentStep;
        if (((_this_state__currentStep = this.state._currentStep) === null || _this_state__currentStep === void 0 ? void 0 : _this_state__currentStep.type) === 'next_step_final_output') {
            return this.state._currentAgent.processFinalOutput(this.state._currentStep.output);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn('Accessed finalOutput before agent run is completed.');
        return undefined;
    }
    constructor(state){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "state", void 0);
        this.state = state;
    }
}
class RunResult extends RunResultBase {
    constructor(state){
        super(state);
    }
}
var _error = /*#__PURE__*/ new WeakMap(), _signal = /*#__PURE__*/ new WeakMap(), _readableController = /*#__PURE__*/ new WeakMap(), _readableStream = /*#__PURE__*/ new WeakMap(), _completedPromise = /*#__PURE__*/ new WeakMap(), _completedPromiseResolve = /*#__PURE__*/ new WeakMap(), _completedPromiseReject = /*#__PURE__*/ new WeakMap(), _cancelled = /*#__PURE__*/ new WeakMap();
class StreamedRunResult extends RunResultBase {
    /**
     * The current agent that is running
     */ get currentAgent() {
        return this.lastAgent;
    }
    /**
     * @internal
     * Adds an item to the stream of output items
     */ _addItem(item) {
        if (!this.cancelled) {
            var _class_private_field_get;
            (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.enqueue(item);
        }
    }
    /**
     * @internal
     * Indicates that the stream has been completed
     */ _done() {
        var _this, _this1, _ref;
        if (!this.cancelled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController).close();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController, undefined);
            (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _completedPromiseResolve)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        }
    }
    /**
     * @internal
     * Handles an error in the stream loop.
     */ _raiseError(err) {
        var _this, _this1, _ref;
        if (!this.cancelled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController).error(err);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController, undefined);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _error, err);
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _completedPromiseReject)) === null || _this === void 0 ? void 0 : _this.call(_this1, err);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedPromise).catch((e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Resulted in an error: ".concat(e));
        });
    }
    /**
     * Returns true if the stream has been cancelled.
     */ get cancelled() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cancelled);
    }
    /**
     * Returns the underlying readable stream.
     * @returns A readable stream of the agent run.
     */ toStream() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableStream);
    }
    /**
     * Await this promise to ensure that the stream has been completed if you are not consuming the
     * stream directly.
     */ get completed() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedPromise);
    }
    /**
     * Error thrown during the run, if any.
     */ get error() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _error);
    }
    toTextStream() {
        let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableStream).pipeThrough(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TransformStream"]({
            transform (event, controller) {
                if (event.type === 'raw_model_stream_event' && event.data.type === 'output_text_delta') {
                    const item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamEventTextStream"].parse(event.data);
                    controller.enqueue(item.delta);
                }
            }
        }));
        if (options.compatibleWithNodeStreams) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Readable"].fromWeb(stream);
        }
        return stream;
    }
    [Symbol.asyncIterator]() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableStream)[Symbol.asyncIterator]();
    }
    constructor(result = {}){
        var _this, _this1, _ref;
        super(result.state), /**
     * The current turn number
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentTurn", 0), /**
     * The maximum number of turns that can be run
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "maxTurns", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _error, {
            writable: true,
            value: null
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signal, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableStream, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedPromise, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedPromiseResolve, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedPromiseReject, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cancelled, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signal, result.signal);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableStream, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReadableStream"]({
            start: (controller)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController, controller);
            },
            cancel: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cancelled, true);
            }
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedPromise, new Promise((resolve, reject)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedPromiseResolve, resolve);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedPromiseReject, reject);
        }));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signal)) {
            const handleAbort = ()=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cancelled)) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cancelled, true);
                const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableController, undefined);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableStream).locked) {
                    if (controller) {
                        try {
                            controller.close();
                        } catch (err) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Failed to close readable stream on abort: ".concat(err));
                        }
                    }
                } else {
                    var _class_private_field_get;
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _readableStream).cancel((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signal)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.reason).catch((err)=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Failed to cancel readable stream on abort: ".concat(err));
                    });
                }
                (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _completedPromiseResolve)) === null || _this === void 0 ? void 0 : _this.call(_this1);
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signal).aborted) {
                handleAbort();
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signal).addEventListener('abort', handleAbort, {
                    once: true
                });
            }
        }
    }
} //# sourceMappingURL=result.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/serialize.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeHandoff",
    ()=>serializeHandoff,
    "serializeTool",
    ()=>serializeTool
]);
function serializeTool(tool) {
    if (tool.type === 'function') {
        return {
            type: 'function',
            name: tool.name,
            description: tool.description,
            parameters: tool.parameters,
            strict: tool.strict
        };
    }
    if (tool.type === 'computer') {
        return {
            type: 'computer',
            name: tool.name,
            environment: tool.computer.environment,
            dimensions: tool.computer.dimensions
        };
    }
    return {
        type: 'hosted_tool',
        name: tool.name,
        providerData: tool.providerData
    };
}
function serializeHandoff(h) {
    return {
        toolName: h.toolName,
        toolDescription: h.toolDescription,
        inputJsonSchema: h.inputJsonSchema,
        strictJsonSchema: h.strictJsonSchema
    };
} //# sourceMappingURL=serialize.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/items.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RunHandoffCallItem",
    ()=>RunHandoffCallItem,
    "RunHandoffOutputItem",
    ()=>RunHandoffOutputItem,
    "RunItemBase",
    ()=>RunItemBase,
    "RunMessageOutputItem",
    ()=>RunMessageOutputItem,
    "RunReasoningItem",
    ()=>RunReasoningItem,
    "RunToolApprovalItem",
    ()=>RunToolApprovalItem,
    "RunToolCallItem",
    ()=>RunToolCallItem,
    "RunToolCallOutputItem",
    ()=>RunToolCallOutputItem,
    "extractAllTextOutput",
    ()=>extractAllTextOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/smartString.mjs [app-client] (ecmascript)");
;
;
class RunItemBase {
    toJSON() {
        return {
            type: this.type,
            rawItem: this.rawItem
        };
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'base_item');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawItem", void 0);
    }
}
class RunMessageOutputItem extends RunItemBase {
    toJSON() {
        return {
            ...super.toJSON(),
            agent: this.agent.toJSON()
        };
    }
    get content() {
        let content = '';
        for (const part of this.rawItem.content){
            if (part.type === 'output_text') {
                content += part.text;
            }
        }
        return content;
    }
    constructor(rawItem, agent){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawItem", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'message_output_item');
        this.rawItem = rawItem;
        this.agent = agent;
    }
}
class RunToolCallItem extends RunItemBase {
    toJSON() {
        return {
            ...super.toJSON(),
            agent: this.agent.toJSON()
        };
    }
    constructor(rawItem, agent){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawItem", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'tool_call_item');
        this.rawItem = rawItem;
        this.agent = agent;
    }
}
class RunToolCallOutputItem extends RunItemBase {
    toJSON() {
        return {
            ...super.toJSON(),
            agent: this.agent.toJSON(),
            output: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSmartString"])(this.output)
        };
    }
    constructor(rawItem, agent, output){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawItem", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "output", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'tool_call_output_item');
        this.rawItem = rawItem;
        this.agent = agent;
        this.output = output;
    }
}
class RunReasoningItem extends RunItemBase {
    toJSON() {
        return {
            ...super.toJSON(),
            agent: this.agent.toJSON()
        };
    }
    constructor(rawItem, agent){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawItem", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'reasoning_item');
        this.rawItem = rawItem;
        this.agent = agent;
    }
}
class RunHandoffCallItem extends RunItemBase {
    toJSON() {
        return {
            ...super.toJSON(),
            agent: this.agent.toJSON()
        };
    }
    constructor(rawItem, agent){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawItem", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'handoff_call_item');
        this.rawItem = rawItem;
        this.agent = agent;
    }
}
class RunHandoffOutputItem extends RunItemBase {
    toJSON() {
        return {
            ...super.toJSON(),
            sourceAgent: this.sourceAgent.toJSON(),
            targetAgent: this.targetAgent.toJSON()
        };
    }
    constructor(rawItem, sourceAgent, targetAgent){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawItem", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "sourceAgent", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "targetAgent", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'handoff_output_item');
        this.rawItem = rawItem;
        this.sourceAgent = sourceAgent;
        this.targetAgent = targetAgent;
    }
}
class RunToolApprovalItem extends RunItemBase {
    toJSON() {
        return {
            ...super.toJSON(),
            agent: this.agent.toJSON()
        };
    }
    constructor(rawItem, agent){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawItem", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'tool_approval_item');
        this.rawItem = rawItem;
        this.agent = agent;
    }
}
function extractAllTextOutput(items) {
    return items.filter((item)=>item.type === 'message_output_item').map((item)=>item.content).join('');
} //# sourceMappingURL=items.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/messages.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the last text from the output message.
 * @param outputMessage
 * @returns
 */ __turbopack_context__.s([
    "getLastTextFromOutputMessage",
    ()=>getLastTextFromOutputMessage,
    "getOutputText",
    ()=>getOutputText
]);
function getLastTextFromOutputMessage(outputMessage) {
    if (outputMessage.type !== 'message') {
        return undefined;
    }
    if (outputMessage.role !== 'assistant') {
        return undefined;
    }
    const lastItem = outputMessage.content[outputMessage.content.length - 1];
    if (lastItem.type !== 'output_text') {
        return undefined;
    }
    return lastItem.text;
}
function getOutputText(output) {
    if (output.output.length === 0) {
        return '';
    }
    return getLastTextFromOutputMessage(output.output[output.output.length - 1]) || '';
} //# sourceMappingURL=messages.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/events.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Streaming event from the LLM. These are `raw` events, i.e. they are directly passed through from
 * the LLM.
 */ __turbopack_context__.s([
    "RunAgentUpdatedStreamEvent",
    ()=>RunAgentUpdatedStreamEvent,
    "RunItemStreamEvent",
    ()=>RunItemStreamEvent,
    "RunRawModelStreamEvent",
    ()=>RunRawModelStreamEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class RunRawModelStreamEvent {
    /**
     * @param data The raw responses stream events from the LLM.
     */ constructor(data){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "data", void 0);
        /**
     * The type of the event.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'raw_model_stream_event');
        this.data = data;
    }
}
class RunItemStreamEvent {
    /**
     * @param name The name of the event.
     * @param item The item that was created.
     */ constructor(name, item){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "item", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'run_item_stream_event');
        this.name = name;
        this.item = item;
    }
}
class RunAgentUpdatedStreamEvent {
    /**
     * @param agent The new agent
     */ constructor(agent){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", 'agent_updated_stream_event');
        this.agent = agent;
    }
} //# sourceMappingURL=events.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/typeGuards.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/smartString.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$lifecycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/lifecycle.mjs [app-client] (ecmascript)"); //# sourceMappingURL=index.mjs.map
;
;
;
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runImplementation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentToolUseTracker",
    ()=>AgentToolUseTracker,
    "addStepToRunResult",
    ()=>addStepToRunResult,
    "checkForFinalOutputFromTools",
    ()=>checkForFinalOutputFromTools,
    "executeComputerActions",
    ()=>executeComputerActions,
    "executeFunctionToolCalls",
    ()=>executeFunctionToolCalls,
    "executeHandoffCalls",
    ()=>executeHandoffCalls,
    "executeInterruptedToolsAndSideEffects",
    ()=>executeInterruptedToolsAndSideEffects,
    "executeToolsAndSideEffects",
    ()=>executeToolsAndSideEffects,
    "getToolCallOutputItem",
    ()=>getToolCallOutputItem,
    "maybeResetToolChoice",
    ()=>maybeResetToolChoice,
    "nextStepSchema",
    ()=>nextStepSchema,
    "processModelResponse",
    ()=>processModelResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/agent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/handoff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/items.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$messages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/messages.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/createSpans.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/tools.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$safeExecute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/safeExecute.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/events.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/smartString.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/typeGuards.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function processModelResponse(modelResponse, agent, tools, handoffs) {
    const items = [];
    const runHandoffs = [];
    const runFunctions = [];
    const runComputerActions = [];
    const runMCPApprovalRequests = [];
    const toolsUsed = [];
    const handoffMap = new Map(handoffs.map((h)=>[
            h.toolName,
            h
        ]));
    const functionMap = new Map(tools.filter((t)=>t.type === 'function').map((t)=>[
            t.name,
            t
        ]));
    const computerTool = tools.find((t)=>t.type === 'computer');
    const mcpToolMap = new Map(tools.filter((t)=>{
        var _t_providerData;
        return t.type === 'hosted_tool' && ((_t_providerData = t.providerData) === null || _t_providerData === void 0 ? void 0 : _t_providerData.type) === 'mcp';
    }).map((t)=>t).map((t)=>[
            t.providerData.server_label,
            t
        ]));
    for (const output of modelResponse.output){
        if (output.type === 'message') {
            if (output.role === 'assistant') {
                items.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunMessageOutputItem"](output, agent));
            }
        } else if (output.type === 'hosted_tool_call') {
            var _output_providerData;
            items.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallItem"](output, agent));
            const toolName = output.name;
            toolsUsed.push(toolName);
            if (((_output_providerData = output.providerData) === null || _output_providerData === void 0 ? void 0 : _output_providerData.type) === 'mcp_approval_request' || output.name === 'mcp_approval_request') {
                // Hosted remote MCP server's approval process
                const providerData = output.providerData;
                const mcpServerLabel = providerData.server_label;
                const mcpServerTool = mcpToolMap.get(mcpServerLabel);
                if (typeof mcpServerTool === 'undefined') {
                    const message = "MCP server (".concat(mcpServerLabel, ") not found in Agent (").concat(agent.name, ")");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addErrorToCurrentSpan"])({
                        message,
                        data: {
                            mcp_server_label: mcpServerLabel
                        }
                    });
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"](message);
                }
                // Do this approval later:
                // We support both onApproval callback (like the Python SDK does) and HITL patterns.
                const approvalItem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"]({
                    type: 'hosted_tool_call',
                    // We must use this name to align with the name sent from the servers
                    name: providerData.name,
                    id: providerData.id,
                    status: 'in_progress',
                    providerData
                }, agent);
                runMCPApprovalRequests.push({
                    requestItem: approvalItem,
                    mcpTool: mcpServerTool
                });
                if (!mcpServerTool.providerData.on_approval) {
                    // When onApproval function exists, it confirms the approval right after this.
                    // Thus, this approval item must be appended only for the next turn interruption patterns.
                    items.push(approvalItem);
                }
            }
        } else if (output.type === 'reasoning') {
            items.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunReasoningItem"](output, agent));
        } else if (output.type === 'computer_call') {
            items.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallItem"](output, agent));
            toolsUsed.push('computer_use');
            if (!computerTool) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addErrorToCurrentSpan"])({
                    message: 'Model produced computer action without a computer tool.',
                    data: {
                        agent_name: agent.name
                    }
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"]('Model produced computer action without a computer tool.');
            }
            runComputerActions.push({
                toolCall: output,
                computer: computerTool
            });
        }
        if (output.type !== 'function_call') {
            continue;
        }
        toolsUsed.push(output.name);
        const handoff = handoffMap.get(output.name);
        if (handoff) {
            items.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunHandoffCallItem"](output, agent));
            runHandoffs.push({
                toolCall: output,
                handoff: handoff
            });
        } else {
            const functionTool = functionMap.get(output.name);
            if (!functionTool) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addErrorToCurrentSpan"])({
                    message: "Tool ".concat(output.name, " not found in agent ").concat(agent.name, "."),
                    data: {
                        tool_name: output.name,
                        agent_name: agent.name
                    }
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"]("Tool ".concat(output.name, " not found in agent ").concat(agent.name, "."));
            }
            items.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallItem"](output, agent));
            runFunctions.push({
                toolCall: output,
                tool: functionTool
            });
        }
    }
    return {
        newItems: items,
        handoffs: runHandoffs,
        functions: runFunctions,
        computerActions: runComputerActions,
        mcpApprovalRequests: runMCPApprovalRequests,
        toolsUsed: toolsUsed,
        hasToolsOrApprovalsToRun () {
            return runHandoffs.length > 0 || runFunctions.length > 0 || runMCPApprovalRequests.length > 0 || runComputerActions.length > 0;
        }
    };
}
const nextStepSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('next_step_handoff'),
        newAgent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('next_step_final_output'),
        output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('next_step_run_again')
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('next_step_interruption'),
        data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())
    })
]);
class SingleStepResult {
    /**
     * The items generated during the agent run (i.e. everything generated after originalInput)
     */ get generatedItems() {
        return this.preStepItems.concat(this.newStepItems);
    }
    constructor(/**
     * The input items i.e. the items before run() was called. May be muted by handoff input filters
     */ originalInput, /**
     * The model response for the current step
     */ modelResponse, /**
     * The items before the current step was executed
     */ preStepItems, /**
     * The items after the current step was executed
     */ newStepItems, /**
     * The next step to execute
     */ nextStep){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "originalInput", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "modelResponse", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "preStepItems", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "newStepItems", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "nextStep", void 0);
        this.originalInput = originalInput;
        this.modelResponse = modelResponse;
        this.preStepItems = preStepItems;
        this.newStepItems = newStepItems;
        this.nextStep = nextStep;
    }
}
function maybeResetToolChoice(agent, toolUseTracker, modelSettings) {
    if (agent.resetToolChoice && toolUseTracker.hasUsedTools(agent)) {
        return {
            ...modelSettings,
            toolChoice: undefined
        };
    }
    return modelSettings;
}
async function executeInterruptedToolsAndSideEffects(agent, originalInput, originalPreStepItems, newResponse, processedResponse, runner, state) {
    // call_ids for function tools
    const functionCallIds = originalPreStepItems.filter((item)=>item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"] && 'callId' in item.rawItem && item.rawItem.type === 'function_call').map((item)=>item.rawItem.callId);
    // Run function tools that require approval after they get their approval results
    const functionToolRuns = processedResponse.functions.filter((run)=>{
        return functionCallIds.includes(run.toolCall.callId);
    });
    const functionResults = await executeFunctionToolCalls(agent, functionToolRuns, runner, state);
    // Create the initial set of the output items
    const newItems = functionResults.map((r)=>r.runItem);
    // Run MCP tools that require approval after they get their approval results
    const mcpApprovalRuns = processedResponse.mcpApprovalRequests.filter((run)=>{
        var _run_requestItem_rawItem_providerData;
        return run.requestItem.type === 'tool_approval_item' && run.requestItem.rawItem.type === 'hosted_tool_call' && ((_run_requestItem_rawItem_providerData = run.requestItem.rawItem.providerData) === null || _run_requestItem_rawItem_providerData === void 0 ? void 0 : _run_requestItem_rawItem_providerData.type) === 'mcp_approval_request';
    });
    for (const run of mcpApprovalRuns){
        // the approval_request_id "mcpr_123..."
        const approvalRequestId = run.requestItem.rawItem.id;
        const approved = state._context.isToolApproved({
            // Since this item name must be the same with the one sent from Responses API server
            toolName: run.requestItem.rawItem.name,
            callId: approvalRequestId
        });
        if (typeof approved !== 'undefined') {
            const providerData = {
                approve: approved,
                approval_request_id: approvalRequestId,
                reason: undefined
            };
            // Tell Responses API server the approval result in the next turn
            newItems.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallItem"]({
                type: 'hosted_tool_call',
                name: 'mcp_approval_response',
                providerData
            }, agent));
        }
    }
    const checkToolOutput = await checkForFinalOutputFromTools(agent, functionResults, state);
    // Exclude the tool approval items, which should not be sent to Responses API,
    // from the SingleStepResult's preStepItems
    const preStepItems = originalPreStepItems.filter((item)=>{
        return !(item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"]);
    });
    if (checkToolOutput.isFinalOutput) {
        runner.emit('agent_end', state._context, agent, checkToolOutput.finalOutput);
        agent.emit('agent_end', state._context, checkToolOutput.finalOutput);
        return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
            type: 'next_step_final_output',
            output: checkToolOutput.finalOutput
        });
    } else if (checkToolOutput.isInterrupted) {
        return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
            type: 'next_step_interruption',
            data: {
                interruptions: checkToolOutput.interruptions
            }
        });
    }
    // we only ran new tools and side effects. We need to run the rest of the agent
    return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
        type: 'next_step_run_again'
    });
}
async function executeToolsAndSideEffects(agent, originalInput, originalPreStepItems, newResponse, processedResponse, runner, state) {
    var _processedResponse_functions, _processedResponse_computerActions, _processedResponse_mcpApprovalRequests, _processedResponse_handoffs;
    const preStepItems = originalPreStepItems;
    let newItems = processedResponse.newItems;
    const [functionResults, computerResults] = await Promise.all([
        executeFunctionToolCalls(agent, processedResponse.functions, runner, state),
        executeComputerActions(agent, processedResponse.computerActions, runner, state._context)
    ]);
    newItems = newItems.concat(functionResults.map((r)=>r.runItem));
    newItems = newItems.concat(computerResults);
    // run hosted MCP approval requests
    if (processedResponse.mcpApprovalRequests.length > 0) {
        for (const approvalRequest of processedResponse.mcpApprovalRequests){
            const toolData = approvalRequest.mcpTool.providerData;
            const requestData = approvalRequest.requestItem.rawItem.providerData;
            if (toolData.on_approval) {
                // synchronously handle the approval process here
                const approvalResult = await toolData.on_approval(state._context, approvalRequest.requestItem);
                const approvalResponseData = {
                    approve: approvalResult.approve,
                    approval_request_id: requestData.id,
                    reason: approvalResult.reason
                };
                newItems.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallItem"]({
                    type: 'hosted_tool_call',
                    name: 'mcp_approval_response',
                    providerData: approvalResponseData
                }, agent));
            } else {
                // receive a user's approval on the next turn
                newItems.push(approvalRequest.requestItem);
                const approvalItem = {
                    type: 'hosted_mcp_tool_approval',
                    tool: approvalRequest.mcpTool,
                    runItem: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"]({
                        type: 'hosted_tool_call',
                        name: requestData.name,
                        id: requestData.id,
                        arguments: requestData.arguments,
                        status: 'in_progress',
                        providerData: requestData
                    }, agent)
                };
                functionResults.push(approvalItem);
            // newItems.push(approvalItem.runItem);
            }
        }
    }
    // process handoffs
    if (processedResponse.handoffs.length > 0) {
        return await executeHandoffCalls(agent, originalInput, preStepItems, newItems, newResponse, processedResponse.handoffs, runner, state._context);
    }
    const checkToolOutput = await checkForFinalOutputFromTools(agent, functionResults, state);
    if (checkToolOutput.isFinalOutput) {
        runner.emit('agent_end', state._context, agent, checkToolOutput.finalOutput);
        agent.emit('agent_end', state._context, checkToolOutput.finalOutput);
        return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
            type: 'next_step_final_output',
            output: checkToolOutput.finalOutput
        });
    } else if (checkToolOutput.isInterrupted) {
        return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
            type: 'next_step_interruption',
            data: {
                interruptions: checkToolOutput.interruptions
            }
        });
    }
    var _processedResponse_functions_length, _processedResponse_computerActions_length, _processedResponse_mcpApprovalRequests_length, _processedResponse_handoffs_length;
    // If the model issued any tool calls or handoffs in this turn,
    // we must NOT treat any assistant message in the same turn as the final output.
    // We should run the loop again so the model can see the tool results and respond.
    const hadToolCallsOrActions = ((_processedResponse_functions_length = (_processedResponse_functions = processedResponse.functions) === null || _processedResponse_functions === void 0 ? void 0 : _processedResponse_functions.length) !== null && _processedResponse_functions_length !== void 0 ? _processedResponse_functions_length : 0) > 0 || ((_processedResponse_computerActions_length = (_processedResponse_computerActions = processedResponse.computerActions) === null || _processedResponse_computerActions === void 0 ? void 0 : _processedResponse_computerActions.length) !== null && _processedResponse_computerActions_length !== void 0 ? _processedResponse_computerActions_length : 0) > 0 || ((_processedResponse_mcpApprovalRequests_length = (_processedResponse_mcpApprovalRequests = processedResponse.mcpApprovalRequests) === null || _processedResponse_mcpApprovalRequests === void 0 ? void 0 : _processedResponse_mcpApprovalRequests.length) !== null && _processedResponse_mcpApprovalRequests_length !== void 0 ? _processedResponse_mcpApprovalRequests_length : 0) > 0 || ((_processedResponse_handoffs_length = (_processedResponse_handoffs = processedResponse.handoffs) === null || _processedResponse_handoffs === void 0 ? void 0 : _processedResponse_handoffs.length) !== null && _processedResponse_handoffs_length !== void 0 ? _processedResponse_handoffs_length : 0) > 0;
    if (hadToolCallsOrActions) {
        return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
            type: 'next_step_run_again'
        });
    }
    // No tool calls/actions in this turn; safe to consider a plain assistant message as final.
    const messageItems = newItems.filter((item)=>item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunMessageOutputItem"]);
    // we will use the last content output as the final output
    const potentialFinalOutput = messageItems.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$messages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastTextFromOutputMessage"])(messageItems[messageItems.length - 1].rawItem) : undefined;
    // if there is no output we just run again
    if (typeof potentialFinalOutput === 'undefined') {
        return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
            type: 'next_step_run_again'
        });
    }
    const hasPendingToolsOrApprovals = functionResults.some((result)=>result.runItem instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"]);
    if (!hasPendingToolsOrApprovals) {
        if (agent.outputType === 'text') {
            return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
                type: 'next_step_final_output',
                output: potentialFinalOutput
            });
        }
        if (agent.outputType !== 'text' && potentialFinalOutput) {
            // Structured output schema => always leads to a final output if we have text.
            const { parser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaAndParserFromInputType"])(agent.outputType, 'final_output');
            const [error] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$safeExecute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeExecute"])(()=>parser(potentialFinalOutput));
            if (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addErrorToCurrentSpan"])({
                    message: 'Invalid output type',
                    data: {
                        error: String(error)
                    }
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"]('Invalid output type');
            }
            return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
                type: 'next_step_final_output',
                output: potentialFinalOutput
            });
        }
    }
    return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
        type: 'next_step_run_again'
    });
}
function getToolCallOutputItem(toolCall, output) {
    return {
        type: 'function_call_result',
        name: toolCall.name,
        callId: toolCall.callId,
        status: 'completed',
        output: {
            type: 'text',
            text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSmartString"])(output)
        }
    };
}
async function executeFunctionToolCalls(agent, toolRuns, runner, state) {
    async function runSingleTool(toolRun) {
        let parsedArgs = toolRun.toolCall.arguments;
        if (toolRun.tool.parameters) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZodObject"])(toolRun.tool.parameters)) {
                parsedArgs = toolRun.tool.parameters.parse(parsedArgs);
            } else {
                parsedArgs = JSON.parse(parsedArgs);
            }
        }
        const needsApproval = await toolRun.tool.needsApproval(state._context, parsedArgs, toolRun.toolCall.callId);
        if (needsApproval) {
            const approval = state._context.isToolApproved({
                toolName: toolRun.tool.name,
                callId: toolRun.toolCall.callId
            });
            if (approval === false) {
                // rejected
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withFunctionSpan"])(async (span)=>{
                    const response = 'Tool execution was not approved.';
                    span.setError({
                        message: response,
                        data: {
                            tool_name: toolRun.tool.name,
                            error: "Tool execution for ".concat(toolRun.toolCall.callId, " was manually rejected by user.")
                        }
                    });
                    span.spanData.output = response;
                    return {
                        type: 'function_output',
                        tool: toolRun.tool,
                        output: response,
                        runItem: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallOutputItem"](getToolCallOutputItem(toolRun.toolCall, response), agent, response)
                    };
                }, {
                    data: {
                        name: toolRun.tool.name
                    }
                });
            }
            if (approval !== true) {
                // this approval process needs to be done in the next turn
                return {
                    type: 'function_approval',
                    tool: toolRun.tool,
                    runItem: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"](toolRun.toolCall, agent)
                };
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withFunctionSpan"])(async (span)=>{
            if (runner.config.traceIncludeSensitiveData) {
                span.spanData.input = toolRun.toolCall.arguments;
            }
            try {
                runner.emit('agent_tool_start', state._context, agent, toolRun.tool, {
                    toolCall: toolRun.toolCall
                });
                agent.emit('agent_tool_start', state._context, toolRun.tool, {
                    toolCall: toolRun.toolCall
                });
                const toolOutput = await toolRun.tool.invoke(state._context, toolRun.toolCall.arguments, {
                    toolCall: toolRun.toolCall
                });
                // Use string data for tracing and event emitter
                const stringResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSmartString"])(toolOutput);
                runner.emit('agent_tool_end', state._context, agent, toolRun.tool, stringResult, {
                    toolCall: toolRun.toolCall
                });
                agent.emit('agent_tool_end', state._context, toolRun.tool, stringResult, {
                    toolCall: toolRun.toolCall
                });
                if (runner.config.traceIncludeSensitiveData) {
                    span.spanData.output = stringResult;
                }
                const functionResult = {
                    type: 'function_output',
                    tool: toolRun.tool,
                    output: toolOutput,
                    runItem: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallOutputItem"](getToolCallOutputItem(toolRun.toolCall, toolOutput), agent, toolOutput)
                };
                const nestedRunResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consumeAgentToolRunResult"])(toolRun.toolCall);
                if (nestedRunResult) {
                    functionResult.agentRunResult = nestedRunResult;
                    const nestedInterruptions = nestedRunResult.interruptions;
                    if (nestedInterruptions.length > 0) {
                        functionResult.interruptions = nestedInterruptions;
                    }
                }
                return functionResult;
            } catch (error) {
                span.setError({
                    message: 'Error running tool',
                    data: {
                        tool_name: toolRun.tool.name,
                        error: String(error)
                    }
                });
                throw error;
            }
        }, {
            data: {
                name: toolRun.tool.name
            }
        });
    }
    try {
        const results = await Promise.all(toolRuns.map(runSingleTool));
        return results;
    } catch (e) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolCallError"]("Failed to run function tools: ".concat(e), e, state);
    }
}
/**
 * @internal
 */ // Internal helper: dispatch a computer action and return a screenshot (sync/async)
async function _runComputerActionAndScreenshot(computer, toolCall) {
    const action = toolCall.action;
    let screenshot;
    // Dispatch based on action type string (assume action.type exists)
    switch(action.type){
        case 'click':
            await computer.click(action.x, action.y, action.button);
            break;
        case 'double_click':
            await computer.doubleClick(action.x, action.y);
            break;
        case 'drag':
            await computer.drag(action.path.map((p)=>[
                    p.x,
                    p.y
                ]));
            break;
        case 'keypress':
            await computer.keypress(action.keys);
            break;
        case 'move':
            await computer.move(action.x, action.y);
            break;
        case 'screenshot':
            screenshot = await computer.screenshot();
            break;
        case 'scroll':
            await computer.scroll(action.x, action.y, action.scroll_x, action.scroll_y);
            break;
        case 'type':
            await computer.type(action.text);
            break;
        case 'wait':
            await computer.wait();
            break;
        default:
            action; // ensures that we handle every action we know of
            break;
    }
    if (typeof screenshot !== 'undefined') {
        return screenshot;
    }
    // Always return screenshot as base64 string
    if (typeof computer.screenshot === 'function') {
        screenshot = await computer.screenshot();
        if (typeof screenshot !== 'undefined') {
            return screenshot;
        }
    }
    throw new Error('Computer does not implement screenshot()');
}
async function executeComputerActions(agent, actions, runner, runContext) {
    let customLogger = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : undefined;
    const _logger = customLogger !== null && customLogger !== void 0 ? customLogger : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const results = [];
    for (const action of actions){
        const computer = action.computer.computer;
        const toolCall = action.toolCall;
        // Hooks: on_tool_start (global + agent)
        runner.emit('agent_tool_start', runContext, agent, action.computer, {
            toolCall
        });
        if (typeof agent.emit === 'function') {
            agent.emit('agent_tool_start', runContext, action.computer, {
                toolCall
            });
        }
        // Run the action and get screenshot
        let output;
        try {
            output = await _runComputerActionAndScreenshot(computer, toolCall);
        } catch (err) {
            _logger.error('Failed to execute computer action:', err);
            output = '';
        }
        // Hooks: on_tool_end (global + agent)
        runner.emit('agent_tool_end', runContext, agent, action.computer, output, {
            toolCall
        });
        if (typeof agent.emit === 'function') {
            agent.emit('agent_tool_end', runContext, action.computer, output, {
                toolCall
            });
        }
        // Always return a screenshot as a base64 data URL
        const imageUrl = output ? "data:image/png;base64,".concat(output) : '';
        const rawItem = {
            type: 'computer_call_result',
            callId: toolCall.callId,
            output: {
                type: 'computer_screenshot',
                data: imageUrl
            }
        };
        results.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallOutputItem"](rawItem, agent, imageUrl));
    }
    return results;
}
async function executeHandoffCalls(agent, originalInput, preStepItems, newStepItems, newResponse, runHandoffs, runner, runContext) {
    newStepItems = [
        ...newStepItems
    ];
    if (runHandoffs.length === 0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn('Incorrectly called executeHandoffCalls with no handoffs. This should not happen. Moving on.');
        return new SingleStepResult(originalInput, newResponse, preStepItems, newStepItems, {
            type: 'next_step_run_again'
        });
    }
    if (runHandoffs.length > 1) {
        // multiple handoffs. Ignoring all but the first one by adding reject responses for those
        const outputMessage = 'Multiple handoffs detected, ignoring this one.';
        for(let i = 1; i < runHandoffs.length; i++){
            newStepItems.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallOutputItem"](getToolCallOutputItem(runHandoffs[i].toolCall, outputMessage), agent, outputMessage));
        }
    }
    const actualHandoff = runHandoffs[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withHandoffSpan"])(async (handoffSpan)=>{
        const handoff = actualHandoff.handoff;
        const newAgent = await handoff.onInvokeHandoff(runContext, actualHandoff.toolCall.arguments);
        handoffSpan.spanData.to_agent = newAgent.name;
        if (runHandoffs.length > 1) {
            const requestedAgents = runHandoffs.map((h)=>h.handoff.agentName);
            handoffSpan.setError({
                message: 'Multiple handoffs requested',
                data: {
                    requested_agents: requestedAgents
                }
            });
        }
        newStepItems.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunHandoffOutputItem"](getToolCallOutputItem(actualHandoff.toolCall, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransferMessage"])(newAgent)), agent, newAgent));
        runner.emit('agent_handoff', runContext, agent, newAgent);
        agent.emit('agent_handoff', runContext, newAgent);
        var _handoff_inputFilter;
        const inputFilter = (_handoff_inputFilter = handoff.inputFilter) !== null && _handoff_inputFilter !== void 0 ? _handoff_inputFilter : runner.config.handoffInputFilter;
        if (inputFilter) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Filtering inputs for handoff');
            if (typeof inputFilter !== 'function') {
                handoffSpan.setError({
                    message: 'Invalid input filter',
                    data: {
                        details: 'not callable'
                    }
                });
            }
            const handoffInputData = {
                inputHistory: Array.isArray(originalInput) ? [
                    ...originalInput
                ] : originalInput,
                preHandoffItems: [
                    ...preStepItems
                ],
                newItems: [
                    ...newStepItems
                ],
                runContext
            };
            const filtered = inputFilter(handoffInputData);
            originalInput = filtered.inputHistory;
            preStepItems = filtered.preHandoffItems;
            newStepItems = filtered.newItems;
        }
        return new SingleStepResult(originalInput, newResponse, preStepItems, newStepItems, {
            type: 'next_step_handoff',
            newAgent
        });
    }, {
        data: {
            from_agent: agent.name
        }
    });
}
const NOT_FINAL_OUTPUT = {
    isFinalOutput: false,
    isInterrupted: undefined
};
async function checkForFinalOutputFromTools(agent, toolResults, state) {
    if (toolResults.length === 0) {
        return NOT_FINAL_OUTPUT;
    }
    const interruptions = [];
    for (const result of toolResults){
        if (result.runItem instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"]) {
            interruptions.push(result.runItem);
        }
        if (result.type === 'function_output') {
            if (Array.isArray(result.interruptions)) {
                interruptions.push(...result.interruptions);
            } else if (result.agentRunResult) {
                const nestedInterruptions = result.agentRunResult.interruptions;
                if (nestedInterruptions.length > 0) {
                    interruptions.push(...nestedInterruptions);
                }
            }
        }
    }
    if (interruptions.length > 0) {
        return {
            isFinalOutput: false,
            isInterrupted: true,
            interruptions
        };
    }
    if (agent.toolUseBehavior === 'run_llm_again') {
        return NOT_FINAL_OUTPUT;
    }
    const firstToolResult = toolResults[0];
    if (agent.toolUseBehavior === 'stop_on_first_tool') {
        if ((firstToolResult === null || firstToolResult === void 0 ? void 0 : firstToolResult.type) === 'function_output') {
            const stringOutput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSmartString"])(firstToolResult.output);
            return {
                isFinalOutput: true,
                isInterrupted: undefined,
                finalOutput: stringOutput
            };
        }
        return NOT_FINAL_OUTPUT;
    }
    const toolUseBehavior = agent.toolUseBehavior;
    if (typeof toolUseBehavior === 'object') {
        const stoppingTool = toolResults.find((r)=>toolUseBehavior.stopAtToolNames.includes(r.tool.name));
        if ((stoppingTool === null || stoppingTool === void 0 ? void 0 : stoppingTool.type) === 'function_output') {
            const stringOutput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$smartString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSmartString"])(stoppingTool.output);
            return {
                isFinalOutput: true,
                isInterrupted: undefined,
                finalOutput: stringOutput
            };
        }
        return NOT_FINAL_OUTPUT;
    }
    if (typeof toolUseBehavior === 'function') {
        return toolUseBehavior(state._context, toolResults);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]("Invalid toolUseBehavior: ".concat(toolUseBehavior), state);
}
function addStepToRunResult(result, step) {
    for (const item of step.newStepItems){
        let itemName;
        if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunMessageOutputItem"]) {
            itemName = 'message_output_created';
        } else if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunHandoffCallItem"]) {
            itemName = 'handoff_requested';
        } else if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunHandoffOutputItem"]) {
            itemName = 'handoff_occurred';
        } else if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallItem"]) {
            itemName = 'tool_called';
        } else if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallOutputItem"]) {
            itemName = 'tool_output';
        } else if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunReasoningItem"]) {
            itemName = 'reasoning_item_created';
        } else if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"]) {
            itemName = 'tool_approval_requested';
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn('Unknown item type: ', item);
            continue;
        }
        result._addItem(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunItemStreamEvent"](itemName, item));
    }
}
var _agentToTools = /*#__PURE__*/ new WeakMap();
class AgentToolUseTracker {
    addToolUse(agent, toolNames) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _agentToTools).set(agent, toolNames);
    }
    hasUsedTools(agent) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _agentToTools).has(agent);
    }
    toJSON() {
        return Object.fromEntries(Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _agentToTools).entries()).map((param)=>{
            let [agent, toolNames] = param;
            return [
                agent.name,
                toolNames
            ];
        }));
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _agentToTools, {
            writable: true,
            value: new Map()
        });
    }
} //# sourceMappingURL=runImplementation.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CURRENT_SCHEMA_VERSION",
    ()=>CURRENT_SCHEMA_VERSION,
    "RunState",
    ()=>RunState,
    "SerializedRunState",
    ()=>SerializedRunState,
    "buildAgentMap",
    ()=>buildAgentMap,
    "deserializeItem",
    ()=>deserializeItem,
    "deserializeModelResponse",
    ()=>deserializeModelResponse,
    "deserializeSpan",
    ()=>deserializeSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/agent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/items.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$run$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/run.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runImplementation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/provider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$usage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/usage.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/handoff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/types/protocol.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$safeExecute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/safeExecute.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const CURRENT_SCHEMA_VERSION = '1.0';
const $schemaVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(CURRENT_SCHEMA_VERSION);
const serializedAgentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const serializedSpanBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    object: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('trace.span'),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    trace_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parent_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    started_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    ended_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()).optional()
    }).nullable(),
    span_data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())
});
const SerializedSpan = serializedSpanBase.extend({
    previous_span: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].lazy(()=>SerializedSpan).optional()
});
const usageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    requests: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    inputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    outputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const modelResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    usage: usageSchema,
    output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutputModelItem"]),
    responseId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    providerData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()).optional()
});
const itemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('message_output_item'),
        rawItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantMessageItem"],
        agent: serializedAgentSchema
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('tool_call_item'),
        rawItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolCallItem"].or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HostedToolCallItem"]),
        agent: serializedAgentSchema
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('tool_call_output_item'),
        rawItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionCallResultItem"],
        agent: serializedAgentSchema,
        output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('reasoning_item'),
        rawItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReasoningItem"],
        agent: serializedAgentSchema
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('handoff_call_item'),
        rawItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionCallItem"],
        agent: serializedAgentSchema
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('handoff_output_item'),
        rawItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionCallResultItem"],
        sourceAgent: serializedAgentSchema,
        targetAgent: serializedAgentSchema
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('tool_approval_item'),
        rawItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionCallItem"].or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HostedToolCallItem"]),
        agent: serializedAgentSchema
    })
]);
const serializedTraceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    object: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('trace'),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    workflow_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    group_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())
});
const serializedProcessedResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    newItems: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(itemSchema),
    toolsUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    handoffs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        toolCall: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
        handoff: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
    })),
    functions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        toolCall: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
        tool: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
    })),
    computerActions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        toolCall: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
        computer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
    })),
    mcpApprovalRequests: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        requestItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            // protocol.HostedToolCallItem
            rawItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('hosted_tool_call'),
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                arguments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                // this always exists but marked as optional for early version compatibility; when releasing 1.0, we can remove the nullable and optional
                providerData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()).nullable().optional()
            })
        }),
        // HostedMCPTool
        mcpTool: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('hosted_tool'),
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('hosted_mcp'),
            providerData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())
        })
    })).optional()
});
const guardrailFunctionOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tripwireTriggered: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    outputInfo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
});
const inputGuardrailResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    guardrail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('input'),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    output: guardrailFunctionOutputSchema
});
const outputGuardrailResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    guardrail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('output'),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    agentOutput: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
    agent: serializedAgentSchema,
    output: guardrailFunctionOutputSchema
});
const SerializedRunState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    $schemaVersion,
    currentTurn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    currentAgent: serializedAgentSchema,
    originalInput: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelItem"])),
    modelResponses: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(modelResponseSchema),
    context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        usage: usageSchema,
        approvals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            approved: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()),
            rejected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean())
        })),
        context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())
    }),
    toolUseTracker: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())),
    maxTurns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    currentAgentSpan: SerializedSpan.nullable().optional(),
    noActiveAgentRun: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    inputGuardrailResults: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(inputGuardrailResultSchema),
    outputGuardrailResults: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(outputGuardrailResultSchema),
    currentStep: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextStepSchema"].optional(),
    lastModelResponse: modelResponseSchema.optional(),
    generatedItems: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(itemSchema),
    lastProcessedResponse: serializedProcessedResponseSchema.optional(),
    trace: serializedTraceSchema.nullable()
});
class RunState {
    /**
     * The history of the agent run. This includes the input items and the new items generated during the run.
     *
     * This can be used as inputs for the next agent run.
     */ get history() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$run$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTurnInput"])(this._originalInput, this._generatedItems);
    }
    /**
     * Returns all interruptions if the current step is an interruption otherwise returns an empty array.
     */ getInterruptions() {
        var _this__currentStep;
        if (((_this__currentStep = this._currentStep) === null || _this__currentStep === void 0 ? void 0 : _this__currentStep.type) !== 'next_step_interruption') {
            return [];
        }
        return this._currentStep.data.interruptions;
    }
    /**
     * Approves a tool call requested by the agent through an interruption and approval item request.
     *
     * To approve the request use this method and then run the agent again with the same state object
     * to continue the execution.
     *
     * By default it will only approve the current tool call. To allow the tool to be used multiple
     * times throughout the run, set the `alwaysApprove` option to `true`.
     *
     * @param approvalItem - The tool call approval item to approve.
     * @param options - Options for the approval.
     */ approve(approvalItem) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            alwaysApprove: false
        };
        this._context.approveTool(approvalItem, options);
    }
    /**
     * Rejects a tool call requested by the agent through an interruption and approval item request.
     *
     * To reject the request use this method and then run the agent again with the same state object
     * to continue the execution.
     *
     * By default it will only reject the current tool call. To allow the tool to be used multiple
     * times throughout the run, set the `alwaysReject` option to `true`.
     *
     * @param approvalItem - The tool call approval item to reject.
     * @param options - Options for the rejection.
     */ reject(approvalItem) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            alwaysReject: false
        };
        this._context.rejectTool(approvalItem, options);
    }
    /**
     * Serializes the run state to a JSON object.
     *
     * This method is used to serialize the run state to a JSON object that can be used to
     * resume the run later.
     *
     * @returns The serialized run state.
     */ toJSON() {
        var _this__currentAgentSpan;
        const output = {
            $schemaVersion: CURRENT_SCHEMA_VERSION,
            currentTurn: this._currentTurn,
            currentAgent: {
                name: this._currentAgent.name
            },
            originalInput: this._originalInput,
            modelResponses: this._modelResponses.map((response)=>{
                return {
                    usage: {
                        requests: response.usage.requests,
                        inputTokens: response.usage.inputTokens,
                        outputTokens: response.usage.outputTokens,
                        totalTokens: response.usage.totalTokens
                    },
                    output: response.output,
                    responseId: response.responseId,
                    providerData: response.providerData
                };
            }),
            context: this._context.toJSON(),
            toolUseTracker: this._toolUseTracker.toJSON(),
            maxTurns: this._maxTurns,
            currentAgentSpan: (_this__currentAgentSpan = this._currentAgentSpan) === null || _this__currentAgentSpan === void 0 ? void 0 : _this__currentAgentSpan.toJSON(),
            noActiveAgentRun: this._noActiveAgentRun,
            inputGuardrailResults: this._inputGuardrailResults,
            outputGuardrailResults: this._outputGuardrailResults.map((r)=>({
                    ...r,
                    agent: r.agent.toJSON()
                })),
            currentStep: this._currentStep,
            lastModelResponse: this._lastTurnResponse,
            generatedItems: this._generatedItems.map((item)=>item.toJSON()),
            lastProcessedResponse: this._lastProcessedResponse,
            trace: this._trace ? this._trace.toJSON() : null
        };
        // parsing the schema to ensure the output is valid for reparsing
        const parsed = SerializedRunState.safeParse(output);
        if (!parsed.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemError"]("Failed to serialize run state. ".concat(parsed.error.message));
        }
        return parsed.data;
    }
    /**
     * Serializes the run state to a string.
     *
     * This method is used to serialize the run state to a string that can be used to
     * resume the run later.
     *
     * @returns The serialized run state.
     */ toString() {
        return JSON.stringify(this.toJSON());
    }
    /**
     * Deserializes a run state from a string.
     *
     * This method is used to deserialize a run state from a string that was serialized using the
     * `toString` method.
     */ static async fromString(initialAgent, str) {
        var _stateJson_currentStep;
        const [parsingError, jsonResult] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$safeExecute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeExecute"])(()=>JSON.parse(str));
        if (parsingError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]("Failed to parse run state. ".concat(parsingError instanceof Error ? parsingError.message : String(parsingError)));
        }
        const currentSchemaVersion = jsonResult.$schemaVersion;
        if (!currentSchemaVersion) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]('Run state is missing schema version');
        }
        if (currentSchemaVersion !== CURRENT_SCHEMA_VERSION) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]("Run state schema version ".concat(currentSchemaVersion, " is not supported. Please use version ").concat(CURRENT_SCHEMA_VERSION));
        }
        const stateJson = SerializedRunState.parse(JSON.parse(str));
        const agentMap = buildAgentMap(initialAgent);
        //
        // Rebuild the context
        //
        const context = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunContext"](stateJson.context.context);
        context._rebuildApprovals(stateJson.context.approvals);
        //
        // Find the current agent from the initial agent
        //
        const currentAgent = agentMap.get(stateJson.currentAgent.name);
        if (!currentAgent) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]("Agent ".concat(stateJson.currentAgent.name, " not found"));
        }
        const state = new RunState(context, '', currentAgent, stateJson.maxTurns);
        state._currentTurn = stateJson.currentTurn;
        // rebuild tool use tracker
        state._toolUseTracker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentToolUseTracker"]();
        for (const [agentName, toolNames] of Object.entries(stateJson.toolUseTracker)){
            state._toolUseTracker.addToolUse(agentMap.get(agentName), toolNames);
        }
        // rebuild current agent span
        if (stateJson.currentAgentSpan) {
            var _stateJson_trace, _stateJson_trace1, _stateJson_trace2, _stateJson_trace3;
            if (!stateJson.trace) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn('Trace is not set, skipping tracing setup');
            }
            var _stateJson_trace_group_id;
            const trace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createTrace({
                traceId: (_stateJson_trace = stateJson.trace) === null || _stateJson_trace === void 0 ? void 0 : _stateJson_trace.id,
                name: (_stateJson_trace1 = stateJson.trace) === null || _stateJson_trace1 === void 0 ? void 0 : _stateJson_trace1.workflow_name,
                groupId: (_stateJson_trace_group_id = (_stateJson_trace2 = stateJson.trace) === null || _stateJson_trace2 === void 0 ? void 0 : _stateJson_trace2.group_id) !== null && _stateJson_trace_group_id !== void 0 ? _stateJson_trace_group_id : undefined,
                metadata: (_stateJson_trace3 = stateJson.trace) === null || _stateJson_trace3 === void 0 ? void 0 : _stateJson_trace3.metadata
            });
            state._currentAgentSpan = deserializeSpan(trace, stateJson.currentAgentSpan);
            state._trace = trace;
        }
        state._noActiveAgentRun = stateJson.noActiveAgentRun;
        state._inputGuardrailResults = stateJson.inputGuardrailResults;
        state._outputGuardrailResults = stateJson.outputGuardrailResults.map((r)=>({
                ...r,
                agent: agentMap.get(r.agent.name)
            }));
        state._currentStep = stateJson.currentStep;
        state._originalInput = stateJson.originalInput;
        state._modelResponses = stateJson.modelResponses.map(deserializeModelResponse);
        state._lastTurnResponse = stateJson.lastModelResponse ? deserializeModelResponse(stateJson.lastModelResponse) : undefined;
        state._generatedItems = stateJson.generatedItems.map((item)=>deserializeItem(item, agentMap));
        state._lastProcessedResponse = stateJson.lastProcessedResponse ? await deserializeProcessedResponse(agentMap, state._currentAgent, state._context, stateJson.lastProcessedResponse) : undefined;
        if (((_stateJson_currentStep = stateJson.currentStep) === null || _stateJson_currentStep === void 0 ? void 0 : _stateJson_currentStep.type) === 'next_step_handoff') {
            state._currentStep = {
                type: 'next_step_handoff',
                newAgent: agentMap.get(stateJson.currentStep.newAgent.name)
            };
        }
        return state;
    }
    constructor(context, originalInput, startingAgent, maxTurns){
        /**
     * Current turn number in the conversation.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_currentTurn", 0);
        /**
     * The agent currently handling the conversation.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_currentAgent", void 0);
        /**
     * Original user input prior to any processing.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_originalInput", void 0);
        /**
     * Responses from the model so far.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_modelResponses", void 0);
        /**
     * Active tracing span for the current agent if tracing is enabled.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_currentAgentSpan", void 0);
        /**
     * Run context tracking approvals, usage, and other metadata.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_context", void 0);
        /**
     * Tracks what tools each agent has used.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_toolUseTracker", void 0);
        /**
     * Items generated by the agent during the run.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_generatedItems", void 0);
        /**
     * Maximum allowed turns before forcing termination.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_maxTurns", void 0);
        /**
     * Whether the run has an active agent step in progress.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_noActiveAgentRun", true);
        /**
     * Last model response for the previous turn.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_lastTurnResponse", void 0);
        /**
     * Results from input guardrails applied to the run.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_inputGuardrailResults", void 0);
        /**
     * Results from output guardrails applied to the run.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_outputGuardrailResults", void 0);
        /**
     * Next step computed for the agent to take.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_currentStep", undefined);
        /**
     * Parsed model response after applying guardrails and tools.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_lastProcessedResponse", undefined);
        /**
     * Trace associated with this run if tracing is enabled.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_trace", null);
        this._context = context;
        this._originalInput = structuredClone(originalInput);
        this._modelResponses = [];
        this._currentAgentSpan = undefined;
        this._currentAgent = startingAgent;
        this._toolUseTracker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentToolUseTracker"]();
        this._generatedItems = [];
        this._maxTurns = maxTurns;
        this._inputGuardrailResults = [];
        this._outputGuardrailResults = [];
        this._trace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentTrace"])();
    }
}
function buildAgentMap(initialAgent) {
    const map = new Map();
    const queue = [
        initialAgent
    ];
    while(queue.length > 0){
        const currentAgent = queue.shift();
        if (map.has(currentAgent.name)) {
            continue;
        }
        map.set(currentAgent.name, currentAgent);
        for (const handoff of currentAgent.handoffs){
            if (handoff instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Agent"]) {
                if (!map.has(handoff.name)) {
                    queue.push(handoff);
                }
            } else if (handoff.agent) {
                if (!map.has(handoff.agent.name)) {
                    queue.push(handoff.agent);
                }
            }
        }
    }
    return map;
}
function deserializeSpan(trace, serializedSpan) {
    const spanData = serializedSpan.span_data;
    const previousSpan = serializedSpan.previous_span ? deserializeSpan(trace, serializedSpan.previous_span) : undefined;
    var _serializedSpan_parent_id, _serializedSpan_started_at, _serializedSpan_ended_at;
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalTraceProvider"])().createSpan({
        spanId: serializedSpan.id,
        traceId: serializedSpan.trace_id,
        parentId: (_serializedSpan_parent_id = serializedSpan.parent_id) !== null && _serializedSpan_parent_id !== void 0 ? _serializedSpan_parent_id : undefined,
        startedAt: (_serializedSpan_started_at = serializedSpan.started_at) !== null && _serializedSpan_started_at !== void 0 ? _serializedSpan_started_at : undefined,
        endedAt: (_serializedSpan_ended_at = serializedSpan.ended_at) !== null && _serializedSpan_ended_at !== void 0 ? _serializedSpan_ended_at : undefined,
        data: spanData
    }, trace);
    span.previousSpan = previousSpan;
    return span;
}
function deserializeModelResponse(serializedModelResponse) {
    const usage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$usage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Usage"]();
    usage.requests = serializedModelResponse.usage.requests;
    usage.inputTokens = serializedModelResponse.usage.inputTokens;
    usage.outputTokens = serializedModelResponse.usage.outputTokens;
    usage.totalTokens = serializedModelResponse.usage.totalTokens;
    return {
        usage,
        output: serializedModelResponse.output.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutputModelItem"].parse(item)),
        responseId: serializedModelResponse.responseId,
        providerData: serializedModelResponse.providerData
    };
}
function deserializeItem(serializedItem, agentMap) {
    switch(serializedItem.type){
        case 'message_output_item':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunMessageOutputItem"](serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
        case 'tool_call_item':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallItem"](serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
        case 'tool_call_output_item':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolCallOutputItem"](serializedItem.rawItem, agentMap.get(serializedItem.agent.name), serializedItem.output);
        case 'reasoning_item':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunReasoningItem"](serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
        case 'handoff_call_item':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunHandoffCallItem"](serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
        case 'handoff_output_item':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunHandoffOutputItem"](serializedItem.rawItem, agentMap.get(serializedItem.sourceAgent.name), agentMap.get(serializedItem.targetAgent.name));
        case 'tool_approval_item':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"](serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
    }
}
/**
 * @internal
 */ async function deserializeProcessedResponse(agentMap, currentAgent, context, serializedProcessedResponse) {
    const allTools = await currentAgent.getAllTools(context);
    const tools = new Map(allTools.filter((tool)=>tool.type === 'function').map((tool)=>[
            tool.name,
            tool
        ]));
    const computerTools = new Map(allTools.filter((tool)=>tool.type === 'computer').map((tool)=>[
            tool.name,
            tool
        ]));
    const handoffs = new Map(currentAgent.handoffs.map((entry)=>{
        if (entry instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Agent"]) {
            return [
                entry.name,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handoff"])(entry)
            ];
        }
        return [
            entry.toolName,
            entry
        ];
    }));
    var _serializedProcessedResponse_mcpApprovalRequests;
    const result = {
        newItems: serializedProcessedResponse.newItems.map((item)=>deserializeItem(item, agentMap)),
        toolsUsed: serializedProcessedResponse.toolsUsed,
        handoffs: serializedProcessedResponse.handoffs.map((handoff)=>{
            if (!handoffs.has(handoff.handoff.toolName)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]("Handoff ".concat(handoff.handoff.toolName, " not found"));
            }
            return {
                toolCall: handoff.toolCall,
                handoff: handoffs.get(handoff.handoff.toolName)
            };
        }),
        functions: await Promise.all(serializedProcessedResponse.functions.map(async (functionCall)=>{
            if (!tools.has(functionCall.tool.name)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]("Tool ".concat(functionCall.tool.name, " not found"));
            }
            return {
                toolCall: functionCall.toolCall,
                tool: tools.get(functionCall.tool.name)
            };
        })),
        computerActions: serializedProcessedResponse.computerActions.map((computerAction)=>{
            const toolName = computerAction.computer.name;
            if (!computerTools.has(toolName)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]("Computer tool ".concat(toolName, " not found"));
            }
            return {
                toolCall: computerAction.toolCall,
                computer: computerTools.get(toolName)
            };
        }),
        mcpApprovalRequests: ((_serializedProcessedResponse_mcpApprovalRequests = serializedProcessedResponse.mcpApprovalRequests) !== null && _serializedProcessedResponse_mcpApprovalRequests !== void 0 ? _serializedProcessedResponse_mcpApprovalRequests : []).map((approvalRequest)=>({
                requestItem: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunToolApprovalItem"](approvalRequest.requestItem.rawItem, currentAgent),
                mcpTool: approvalRequest.mcpTool
            }))
    };
    return {
        ...result,
        hasToolsOrApprovalsToRun () {
            return result.handoffs.length > 0 || result.functions.length > 0 || result.mcpApprovalRequests.length > 0 || result.computerActions.length > 0;
        }
    };
} //# sourceMappingURL=runState.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/run.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Runner",
    ()=>Runner,
    "getTracing",
    ()=>getTracing,
    "getTurnInput",
    ()=>getTurnInput,
    "run",
    ()=>run,
    "selectModel",
    ()=>selectModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/agent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$guardrail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/guardrail.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/handoff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$providers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/providers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$result$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/result.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$lifecycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/lifecycle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$serialize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/serialize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runImplementation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/createSpans.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$usage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/usage.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/events.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/types/protocol.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/tools.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$defaultModel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/defaultModel.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const DEFAULT_MAX_TURNS = 10;
function getTracing(tracingDisabled, traceIncludeSensitiveData) {
    if (tracingDisabled) {
        return false;
    }
    if (traceIncludeSensitiveData) {
        return true;
    }
    return 'enabled_without_data';
}
function getTurnInput(originalInput, generatedItems) {
    const rawItems = generatedItems.filter((item)=>item.type !== 'tool_approval_item') // don't include approval items to avoid double function calls
    .map((item)=>item.rawItem);
    if (typeof originalInput === 'string') {
        originalInput = [
            {
                type: 'message',
                role: 'user',
                content: originalInput
            }
        ];
    }
    return [
        ...originalInput,
        ...rawItems
    ];
}
var _runIndividualNonStream = /*#__PURE__*/ new WeakSet(), _runInputGuardrails = /*#__PURE__*/ new WeakSet(), _runOutputGuardrails = /*#__PURE__*/ new WeakSet(), _runStreamLoop = /*#__PURE__*/ new WeakSet(), _runIndividualStream = /*#__PURE__*/ new WeakSet();
class Runner extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$lifecycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunHooks"] {
    run(agent, input) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
            stream: false,
            context: undefined
        };
        if (input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunState"] && input._trace) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withTrace"])(input._trace, async ()=>{
                if (input._currentAgentSpan) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentSpan"])(input._currentAgentSpan);
                }
                if (options === null || options === void 0 ? void 0 : options.stream) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runIndividualStream, runIndividualStream).call(this, agent, input, options);
                } else {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runIndividualNonStream, runIndividualNonStream).call(this, agent, input, options);
                }
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrCreateTrace"])(async ()=>{
            if (options === null || options === void 0 ? void 0 : options.stream) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runIndividualStream, runIndividualStream).call(this, agent, input, options);
            } else {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runIndividualNonStream, runIndividualNonStream).call(this, agent, input, options);
            }
        }, {
            traceId: this.config.traceId,
            name: this.config.workflowName,
            groupId: this.config.groupId,
            metadata: this.config.traceMetadata
        });
    }
    constructor(config = {}){
        super(), /**
     * @internal
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runIndividualNonStream), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runInputGuardrails), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runOutputGuardrails), /**
     * @internal
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runStreamLoop), /**
     * @internal
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runIndividualStream), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "config", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inputGuardrailDefs", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "outputGuardrailDefs", void 0);
        var _config_modelProvider, _config_tracingDisabled, _config_traceIncludeSensitiveData, _config_workflowName;
        this.config = {
            modelProvider: (_config_modelProvider = config.modelProvider) !== null && _config_modelProvider !== void 0 ? _config_modelProvider : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$providers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultModelProvider"])(),
            model: config.model,
            modelSettings: config.modelSettings,
            handoffInputFilter: config.handoffInputFilter,
            inputGuardrails: config.inputGuardrails,
            outputGuardrails: config.outputGuardrails,
            tracingDisabled: (_config_tracingDisabled = config.tracingDisabled) !== null && _config_tracingDisabled !== void 0 ? _config_tracingDisabled : false,
            traceIncludeSensitiveData: (_config_traceIncludeSensitiveData = config.traceIncludeSensitiveData) !== null && _config_traceIncludeSensitiveData !== void 0 ? _config_traceIncludeSensitiveData : true,
            workflowName: (_config_workflowName = config.workflowName) !== null && _config_workflowName !== void 0 ? _config_workflowName : 'Agent workflow',
            traceId: config.traceId,
            groupId: config.groupId,
            traceMetadata: config.traceMetadata
        };
        var _config_inputGuardrails;
        this.inputGuardrailDefs = ((_config_inputGuardrails = config.inputGuardrails) !== null && _config_inputGuardrails !== void 0 ? _config_inputGuardrails : []).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$guardrail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineInputGuardrail"]);
        var _config_outputGuardrails;
        this.outputGuardrailDefs = ((_config_outputGuardrails = config.outputGuardrails) !== null && _config_outputGuardrails !== void 0 ? _config_outputGuardrails : []).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$guardrail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineOutputGuardrail"]);
    }
}
async function runIndividualNonStream(startingAgent, input, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withNewSpanContext"])(async ()=>{
        var _options_maxTurns;
        // if we have a saved state we use that one, otherwise we create a new one
        const state = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunState"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunState"](options.context instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunContext"] ? options.context : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunContext"](options.context), input, startingAgent, (_options_maxTurns = options.maxTurns) !== null && _options_maxTurns !== void 0 ? _options_maxTurns : DEFAULT_MAX_TURNS);
        try {
            while(true){
                const explictlyModelSet = state._currentAgent.model !== undefined && state._currentAgent.model !== '' || this.config.model !== undefined && this.config.model !== '';
                let model = selectModel(state._currentAgent.model, this.config.model);
                if (typeof model === 'string') {
                    model = await this.config.modelProvider.getModel(model);
                }
                var _state__currentStep;
                // if we don't have a current step, we treat this as a new run
                state._currentStep = (_state__currentStep = state._currentStep) !== null && _state__currentStep !== void 0 ? _state__currentStep : {
                    type: 'next_step_run_again'
                };
                if (state._currentStep.type === 'next_step_interruption') {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Continuing from interruption');
                    if (!state._lastTurnResponse || !state._lastProcessedResponse) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]('No model response found in previous state', state);
                    }
                    const turnResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeInterruptedToolsAndSideEffects"])(state._currentAgent, state._originalInput, state._generatedItems, state._lastTurnResponse, state._lastProcessedResponse, this, state);
                    state._toolUseTracker.addToolUse(state._currentAgent, state._lastProcessedResponse.toolsUsed);
                    state._originalInput = turnResult.originalInput;
                    state._generatedItems = turnResult.generatedItems;
                    state._currentStep = turnResult.nextStep;
                    if (turnResult.nextStep.type === 'next_step_interruption') {
                        // we are still in an interruption, so we need to avoid an infinite loop
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$result$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunResult"](state);
                    }
                    continue;
                }
                if (state._currentStep.type === 'next_step_run_again') {
                    const handoffs = [];
                    if (state._currentAgent.handoffs) {
                        // While this array usually must not be undefined,
                        // we've added this check to prevent unexpected runtime errors like https://github.com/openai/openai-agents-js/issues/138
                        handoffs.push(...state._currentAgent.handoffs.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHandoff"]));
                    }
                    if (!state._currentAgentSpan) {
                        const handoffNames = handoffs.map((h)=>h.agentName);
                        state._currentAgentSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAgentSpan"])({
                            data: {
                                name: state._currentAgent.name,
                                handoffs: handoffNames,
                                output_type: state._currentAgent.outputSchemaName
                            }
                        });
                        state._currentAgentSpan.start();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentSpan"])(state._currentAgentSpan);
                    }
                    const tools = await state._currentAgent.getAllTools(state._context);
                    const serializedTools = tools.map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$serialize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTool"])(t));
                    const serializedHandoffs = handoffs.map((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$serialize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeHandoff"])(h));
                    if (state._currentAgentSpan) {
                        state._currentAgentSpan.spanData.tools = tools.map((t)=>t.name);
                    }
                    state._currentTurn++;
                    if (state._currentTurn > state._maxTurns) {
                        var _state__currentAgentSpan;
                        (_state__currentAgentSpan = state._currentAgentSpan) === null || _state__currentAgentSpan === void 0 ? void 0 : _state__currentAgentSpan.setError({
                            message: 'Max turns exceeded',
                            data: {
                                max_turns: state._maxTurns
                            }
                        });
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxTurnsExceededError"]("Max turns (".concat(state._maxTurns, ") exceeded"), state);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Running agent ".concat(state._currentAgent.name, " (turn ").concat(state._currentTurn, ")"));
                    if (state._currentTurn === 1) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runInputGuardrails, runInputGuardrails).call(this, state);
                    }
                    const turnInput = getTurnInput(state._originalInput, state._generatedItems);
                    if (state._noActiveAgentRun) {
                        state._currentAgent.emit('agent_start', state._context, state._currentAgent);
                        this.emit('agent_start', state._context, state._currentAgent);
                    }
                    let modelSettings = {
                        ...this.config.modelSettings,
                        ...state._currentAgent.modelSettings
                    };
                    const agentModelSettings = state._currentAgent.modelSettings;
                    modelSettings = adjustModelSettingsForNonGPT5RunnerModel(explictlyModelSet, agentModelSettings, model, modelSettings);
                    modelSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeResetToolChoice"])(state._currentAgent, state._toolUseTracker, modelSettings);
                    state._lastTurnResponse = await model.getResponse({
                        systemInstructions: await state._currentAgent.getSystemPrompt(state._context),
                        prompt: await state._currentAgent.getPrompt(state._context),
                        input: turnInput,
                        previousResponseId: options.previousResponseId,
                        conversationId: options.conversationId,
                        modelSettings,
                        tools: serializedTools,
                        outputType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertAgentOutputTypeToSerializable"])(state._currentAgent.outputType),
                        handoffs: serializedHandoffs,
                        tracing: getTracing(this.config.tracingDisabled, this.config.traceIncludeSensitiveData),
                        signal: options.signal
                    });
                    state._modelResponses.push(state._lastTurnResponse);
                    state._context.usage.add(state._lastTurnResponse.usage);
                    state._noActiveAgentRun = false;
                    const processedResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processModelResponse"])(state._lastTurnResponse, state._currentAgent, tools, handoffs);
                    state._lastProcessedResponse = processedResponse;
                    const turnResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeToolsAndSideEffects"])(state._currentAgent, state._originalInput, state._generatedItems, state._lastTurnResponse, state._lastProcessedResponse, this, state);
                    state._toolUseTracker.addToolUse(state._currentAgent, state._lastProcessedResponse.toolsUsed);
                    state._originalInput = turnResult.originalInput;
                    state._generatedItems = turnResult.generatedItems;
                    state._currentStep = turnResult.nextStep;
                }
                if (state._currentStep && state._currentStep.type === 'next_step_final_output') {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runOutputGuardrails, runOutputGuardrails).call(this, state, state._currentStep.output);
                    this.emit('agent_end', state._context, state._currentAgent, state._currentStep.output);
                    state._currentAgent.emit('agent_end', state._context, state._currentStep.output);
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$result$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunResult"](state);
                } else if (state._currentStep && state._currentStep.type === 'next_step_handoff') {
                    state._currentAgent = state._currentStep.newAgent;
                    if (state._currentAgentSpan) {
                        state._currentAgentSpan.end();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetCurrentSpan"])();
                        state._currentAgentSpan = undefined;
                    }
                    state._noActiveAgentRun = true;
                    // we've processed the handoff, so we need to run the loop again
                    state._currentStep = {
                        type: 'next_step_run_again'
                    };
                } else if (state._currentStep && state._currentStep.type === 'next_step_interruption') {
                    // interrupted. Don't run any guardrails
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$result$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunResult"](state);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Running next loop');
                }
            }
        } catch (err) {
            if (state._currentAgentSpan) {
                state._currentAgentSpan.setError({
                    message: 'Error in agent run',
                    data: {
                        error: String(err)
                    }
                });
            }
            throw err;
        } finally{
            if (state._currentAgentSpan) {
                var _state__currentStep1;
                if (((_state__currentStep1 = state._currentStep) === null || _state__currentStep1 === void 0 ? void 0 : _state__currentStep1.type) !== 'next_step_interruption') {
                    // don't end the span if the run was interrupted
                    state._currentAgentSpan.end();
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetCurrentSpan"])();
            }
        }
    });
}
async function runInputGuardrails(state) {
    const guardrails = this.inputGuardrailDefs.concat(state._currentAgent.inputGuardrails.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$guardrail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineInputGuardrail"]));
    if (guardrails.length > 0) {
        const guardrailArgs = {
            agent: state._currentAgent,
            input: state._originalInput,
            context: state._context
        };
        try {
            const results = await Promise.all(guardrails.map(async (guardrail)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withGuardrailSpan"])(async (span)=>{
                    const result = await guardrail.run(guardrailArgs);
                    span.spanData.triggered = result.output.tripwireTriggered;
                    return result;
                }, {
                    data: {
                        name: guardrail.name
                    }
                }, state._currentAgentSpan);
            }));
            for (const result of results){
                if (result.output.tripwireTriggered) {
                    if (state._currentAgentSpan) {
                        state._currentAgentSpan.setError({
                            message: 'Guardrail tripwire triggered',
                            data: {
                                guardrail: result.guardrail.name
                            }
                        });
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGuardrailTripwireTriggered"]("Input guardrail triggered: ".concat(JSON.stringify(result.output.outputInfo)), result, state);
                }
            }
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGuardrailTripwireTriggered"]) {
                throw e;
            }
            // roll back the current turn to enable reruns
            state._currentTurn--;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuardrailExecutionError"]("Input guardrail failed to complete: ".concat(e), e, state);
        }
    }
}
async function runOutputGuardrails(state, output) {
    const guardrails = this.outputGuardrailDefs.concat(state._currentAgent.outputGuardrails.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$guardrail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineOutputGuardrail"]));
    if (guardrails.length > 0) {
        const agentOutput = state._currentAgent.processFinalOutput(output);
        const guardrailArgs = {
            agent: state._currentAgent,
            agentOutput,
            context: state._context,
            details: {
                modelResponse: state._lastTurnResponse
            }
        };
        try {
            const results = await Promise.all(guardrails.map(async (guardrail)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withGuardrailSpan"])(async (span)=>{
                    const result = await guardrail.run(guardrailArgs);
                    span.spanData.triggered = result.output.tripwireTriggered;
                    return result;
                }, {
                    data: {
                        name: guardrail.name
                    }
                }, state._currentAgentSpan);
            }));
            for (const result of results){
                if (result.output.tripwireTriggered) {
                    if (state._currentAgentSpan) {
                        state._currentAgentSpan.setError({
                            message: 'Guardrail tripwire triggered',
                            data: {
                                guardrail: result.guardrail.name
                            }
                        });
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutputGuardrailTripwireTriggered"]("Output guardrail triggered: ".concat(JSON.stringify(result.output.outputInfo)), result, state);
                }
            }
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutputGuardrailTripwireTriggered"]) {
                throw e;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuardrailExecutionError"]("Output guardrail failed to complete: ".concat(e), e, state);
        }
    }
}
async function runStreamLoop(result, options) {
    try {
        while(true){
            const currentAgent = result.state._currentAgent;
            const handoffs = currentAgent.handoffs.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHandoff"]);
            const tools = await currentAgent.getAllTools(result.state._context);
            const serializedTools = tools.map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$serialize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTool"])(t));
            const serializedHandoffs = handoffs.map((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$serialize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeHandoff"])(h));
            var _result_state__currentStep;
            result.state._currentStep = (_result_state__currentStep = result.state._currentStep) !== null && _result_state__currentStep !== void 0 ? _result_state__currentStep : {
                type: 'next_step_run_again'
            };
            if (result.state._currentStep.type === 'next_step_interruption') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Continuing from interruption');
                if (!result.state._lastTurnResponse || !result.state._lastProcessedResponse) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]('No model response found in previous state', result.state);
                }
                const turnResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeInterruptedToolsAndSideEffects"])(result.state._currentAgent, result.state._originalInput, result.state._generatedItems, result.state._lastTurnResponse, result.state._lastProcessedResponse, this, result.state);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStepToRunResult"])(result, turnResult);
                result.state._toolUseTracker.addToolUse(result.state._currentAgent, result.state._lastProcessedResponse.toolsUsed);
                result.state._originalInput = turnResult.originalInput;
                result.state._generatedItems = turnResult.generatedItems;
                result.state._currentStep = turnResult.nextStep;
                if (turnResult.nextStep.type === 'next_step_interruption') {
                    // we are still in an interruption, so we need to avoid an infinite loop
                    return;
                }
                continue;
            }
            if (result.state._currentStep.type === 'next_step_run_again') {
                if (!result.state._currentAgentSpan) {
                    const handoffNames = handoffs.map((h)=>h.agentName);
                    result.state._currentAgentSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$createSpans$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAgentSpan"])({
                        data: {
                            name: currentAgent.name,
                            handoffs: handoffNames,
                            tools: tools.map((t)=>t.name),
                            output_type: currentAgent.outputSchemaName
                        }
                    });
                    result.state._currentAgentSpan.start();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentSpan"])(result.state._currentAgentSpan);
                }
                result.state._currentTurn++;
                if (result.state._currentTurn > result.state._maxTurns) {
                    var _result_state__currentAgentSpan;
                    (_result_state__currentAgentSpan = result.state._currentAgentSpan) === null || _result_state__currentAgentSpan === void 0 ? void 0 : _result_state__currentAgentSpan.setError({
                        message: 'Max turns exceeded',
                        data: {
                            max_turns: result.state._maxTurns
                        }
                    });
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxTurnsExceededError"]("Max turns (".concat(result.state._maxTurns, ") exceeded"), result.state);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug("Running agent ".concat(currentAgent.name, " (turn ").concat(result.state._currentTurn, ")"));
                const explictlyModelSet = currentAgent.model !== undefined && currentAgent.model !== '' || this.config.model !== undefined && this.config.model !== '';
                let model = selectModel(currentAgent.model, this.config.model);
                if (typeof model === 'string') {
                    model = await this.config.modelProvider.getModel(model);
                }
                if (result.state._currentTurn === 1) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runInputGuardrails, runInputGuardrails).call(this, result.state);
                }
                let modelSettings = {
                    ...this.config.modelSettings,
                    ...currentAgent.modelSettings
                };
                const agentModelSettings = currentAgent.modelSettings;
                modelSettings = adjustModelSettingsForNonGPT5RunnerModel(explictlyModelSet, agentModelSettings, model, modelSettings);
                modelSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeResetToolChoice"])(currentAgent, result.state._toolUseTracker, modelSettings);
                const turnInput = getTurnInput(result.input, result.newItems);
                if (result.state._noActiveAgentRun) {
                    currentAgent.emit('agent_start', result.state._context, currentAgent);
                    this.emit('agent_start', result.state._context, currentAgent);
                }
                let finalResponse = undefined;
                for await (const event of model.getStreamedResponse({
                    systemInstructions: await currentAgent.getSystemPrompt(result.state._context),
                    prompt: await currentAgent.getPrompt(result.state._context),
                    input: turnInput,
                    previousResponseId: options.previousResponseId,
                    conversationId: options.conversationId,
                    modelSettings,
                    tools: serializedTools,
                    handoffs: serializedHandoffs,
                    outputType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertAgentOutputTypeToSerializable"])(currentAgent.outputType),
                    tracing: getTracing(this.config.tracingDisabled, this.config.traceIncludeSensitiveData),
                    signal: options.signal
                })){
                    if (event.type === 'response_done') {
                        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamEventResponseCompleted"].parse(event);
                        finalResponse = {
                            usage: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$usage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Usage"](parsed.response.usage),
                            output: parsed.response.output,
                            responseId: parsed.response.id
                        };
                    }
                    if (result.cancelled) {
                        // When the user's code exits a loop to consume the stream, we need to break
                        // this loop to prevent internal false errors and unnecessary processing
                        return;
                    }
                    result._addItem(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunRawModelStreamEvent"](event));
                }
                result.state._noActiveAgentRun = false;
                if (!finalResponse) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"]('Model did not produce a final response!', result.state);
                }
                result.state._lastTurnResponse = finalResponse;
                result.state._modelResponses.push(result.state._lastTurnResponse);
                const processedResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processModelResponse"])(result.state._lastTurnResponse, currentAgent, tools, handoffs);
                result.state._lastProcessedResponse = processedResponse;
                const turnResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeToolsAndSideEffects"])(currentAgent, result.state._originalInput, result.state._generatedItems, result.state._lastTurnResponse, result.state._lastProcessedResponse, this, result.state);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runImplementation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStepToRunResult"])(result, turnResult);
                result.state._toolUseTracker.addToolUse(currentAgent, processedResponse.toolsUsed);
                result.state._originalInput = turnResult.originalInput;
                result.state._generatedItems = turnResult.generatedItems;
                result.state._currentStep = turnResult.nextStep;
            }
            if (result.state._currentStep.type === 'next_step_final_output') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runOutputGuardrails, runOutputGuardrails).call(this, result.state, result.state._currentStep.output);
                this.emit('agent_end', result.state._context, currentAgent, result.state._currentStep.output);
                currentAgent.emit('agent_end', result.state._context, result.state._currentStep.output);
                return;
            } else if (result.state._currentStep.type === 'next_step_interruption') {
                // we are done for now. Don't run any output guardrails
                return;
            } else if (result.state._currentStep.type === 'next_step_handoff') {
                var _result_state__currentStep1;
                result.state._currentAgent = (_result_state__currentStep1 = result.state._currentStep) === null || _result_state__currentStep1 === void 0 ? void 0 : _result_state__currentStep1.newAgent;
                if (result.state._currentAgentSpan) {
                    result.state._currentAgentSpan.end();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetCurrentSpan"])();
                }
                result.state._currentAgentSpan = undefined;
                result._addItem(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunAgentUpdatedStreamEvent"](result.state._currentAgent));
                result.state._noActiveAgentRun = true;
                // we've processed the handoff, so we need to run the loop again
                result.state._currentStep = {
                    type: 'next_step_run_again'
                };
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].debug('Running next loop');
            }
        }
    } catch (error) {
        if (result.state._currentAgentSpan) {
            result.state._currentAgentSpan.setError({
                message: 'Error in agent run',
                data: {
                    error: String(error)
                }
            });
        }
        throw error;
    } finally{
        if (result.state._currentAgentSpan) {
            var _result_state__currentStep2;
            if (((_result_state__currentStep2 = result.state._currentStep) === null || _result_state__currentStep2 === void 0 ? void 0 : _result_state__currentStep2.type) !== 'next_step_interruption') {
                result.state._currentAgentSpan.end();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetCurrentSpan"])();
        }
    }
}
async function runIndividualStream(agent, input, options) {
    options = options !== null && options !== void 0 ? options : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withNewSpanContext"])(async ()=>{
        var _options_maxTurns;
        // Initialize or reuse existing state
        const state = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunState"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunState"](options.context instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunContext"] ? options.context : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunContext"](options.context), input, agent, (_options_maxTurns = options.maxTurns) !== null && _options_maxTurns !== void 0 ? _options_maxTurns : DEFAULT_MAX_TURNS);
        // Initialize the streamed result with existing state
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$result$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamedRunResult"]({
            signal: options.signal,
            state
        });
        var _options_maxTurns1;
        // Setup defaults
        result.maxTurns = (_options_maxTurns1 = options.maxTurns) !== null && _options_maxTurns1 !== void 0 ? _options_maxTurns1 : state._maxTurns;
        // Continue the stream loop without blocking
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _runStreamLoop, runStreamLoop).call(this, result, options).then(()=>{
            result._done();
        }, (err)=>{
            result._raiseError(err);
        });
        return result;
    });
}
let _defaultRunner = undefined;
function getDefaultRunner() {
    if (_defaultRunner) {
        return _defaultRunner;
    }
    _defaultRunner = new Runner();
    return _defaultRunner;
}
function selectModel(agentModel, runConfigModel) {
    // When initializing an agent without model name, the model property is set to an empty string. So,
    // * agentModel === '' & runConfigModel exists, runConfigModel will be used
    // * agentModel is set, the agentModel will be used over runConfigModel
    if (typeof agentModel === 'string' && agentModel !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Agent"].DEFAULT_MODEL_PLACEHOLDER || agentModel // any truthy value
    ) {
        return agentModel;
    }
    var _ref;
    return (_ref = runConfigModel !== null && runConfigModel !== void 0 ? runConfigModel : agentModel) !== null && _ref !== void 0 ? _ref : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Agent"].DEFAULT_MODEL_PLACEHOLDER;
}
async function run(agent, input, options) {
    const runner = getDefaultRunner();
    if (options === null || options === void 0 ? void 0 : options.stream) {
        return await runner.run(agent, input, options);
    } else {
        return await runner.run(agent, input, options);
    }
}
/**
 * When the default model is a GPT-5 variant, agents may carry GPT-5-specific providerData
 * (e.g., reasoning effort, text verbosity). If a run resolves to a non-GPT-5 model and the
 * agent relied on the default model (i.e., no explicit model set), these GPT-5-only settings
 * are incompatible and should be stripped to avoid runtime errors.
 */ function adjustModelSettingsForNonGPT5RunnerModel(explictlyModelSet, agentModelSettings, runnerModel, modelSettings) {
    var _agentModelSettings_providerData, _agentModelSettings_providerData_text, _agentModelSettings_providerData1, _agentModelSettings_providerData2;
    if (// gpt-5 is enabled for the default model for agents
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$defaultModel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGpt5Default"])() && // explicitly set model for the agent
    explictlyModelSet && // this runner uses a non-gpt-5 model
    (typeof runnerModel !== 'string' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$defaultModel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gpt5ReasoningSettingsRequired"])(runnerModel)) && (((_agentModelSettings_providerData = agentModelSettings.providerData) === null || _agentModelSettings_providerData === void 0 ? void 0 : _agentModelSettings_providerData.reasoning) || ((_agentModelSettings_providerData1 = agentModelSettings.providerData) === null || _agentModelSettings_providerData1 === void 0 ? void 0 : (_agentModelSettings_providerData_text = _agentModelSettings_providerData1.text) === null || _agentModelSettings_providerData_text === void 0 ? void 0 : _agentModelSettings_providerData_text.verbosity) || ((_agentModelSettings_providerData2 = agentModelSettings.providerData) === null || _agentModelSettings_providerData2 === void 0 ? void 0 : _agentModelSettings_providerData2.reasoning_effort))) {
        var _copiedModelSettings_providerData, _copiedModelSettings_providerData_text, _copiedModelSettings_providerData1, _copiedModelSettings_providerData2;
        const copiedModelSettings = {
            ...modelSettings
        };
        // the incompatible parameters should be removed to avoid runtime errors
        (_copiedModelSettings_providerData = copiedModelSettings.providerData) === null || _copiedModelSettings_providerData === void 0 ? true : delete _copiedModelSettings_providerData.reasoning;
        (_copiedModelSettings_providerData1 = copiedModelSettings.providerData) === null || _copiedModelSettings_providerData1 === void 0 ? true : (_copiedModelSettings_providerData_text = _copiedModelSettings_providerData1.text) === null || _copiedModelSettings_providerData_text === void 0 ? true : delete _copiedModelSettings_providerData_text.verbosity;
        (_copiedModelSettings_providerData2 = copiedModelSettings.providerData) === null || _copiedModelSettings_providerData2 === void 0 ? true : delete _copiedModelSettings_providerData2.reasoning_effort;
        if (copiedModelSettings.reasoning) {
            delete copiedModelSettings.reasoning.effort;
            delete copiedModelSettings.reasoning.summary;
        }
        if (copiedModelSettings.text) {
            delete copiedModelSettings.text.verbosity;
        }
        return copiedModelSettings;
    }
    return modelSettings;
} //# sourceMappingURL=run.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/agent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Agent",
    ()=>Agent,
    "consumeAgentToolRunResult",
    ()=>consumeAgentToolRunResult,
    "saveAgentToolRunResult",
    ()=>saveAgentToolRunResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$lifecycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/lifecycle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$mcp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/mcp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$defaultModel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/defaultModel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tool.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$run$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/run.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/tools.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$messages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/messages.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/utils/typeGuards.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
// Per-process, ephemeral map linking a function tool call to its nested
// Agent run result within the same run; entry is removed after consumption.
const agentToolRunResults = new WeakMap();
function saveAgentToolRunResult(toolCall, runResult) {
    if (toolCall) {
        agentToolRunResults.set(toolCall, runResult);
    }
}
function consumeAgentToolRunResult(toolCall) {
    const runResult = agentToolRunResults.get(toolCall);
    if (runResult) {
        agentToolRunResults.delete(toolCall);
    }
    return runResult;
}
// The parameter type fo needApproval function for the tool created by Agent.asTool() method
const AgentAsToolNeedApprovalSchame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
class Agent extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$lifecycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentHooks"] {
    /**
     * Create an Agent with handoffs and automatically infer the union type for TOutput from the handoff agents' output types.
     */ static create(config) {
        return new Agent({
            ...config,
            handoffs: config.handoffs,
            outputType: config.outputType,
            handoffOutputTypeWarningEnabled: false
        });
    }
    /**
     * Output schema name.
     */ get outputSchemaName() {
        if (this.outputType === 'text') {
            return 'text';
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZodObject"])(this.outputType)) {
            return 'ZodOutput';
        } else if (typeof this.outputType === 'object') {
            return this.outputType.name;
        }
        throw new Error("Unknown output type: ".concat(this.outputType));
    }
    /**
     * Makes a copy of the agent, with the given arguments changed. For example, you could do:
     *
     * ```
     * const newAgent = agent.clone({ instructions: 'New instructions' })
     * ```
     *
     * @param config - A partial configuration to change.
     * @returns A new agent with the given changes.
     */ clone(config) {
        return new Agent({
            ...this,
            ...config
        });
    }
    /**
     * Transform this agent into a tool, callable by other agents.
     *
     * This is different from handoffs in two ways:
     * 1. In handoffs, the new agent receives the conversation history. In this tool, the new agent
     *    receives generated input.
     * 2. In handoffs, the new agent takes over the conversation. In this tool, the new agent is
     *    called as a tool, and the conversation is continued by the original agent.
     *
     * @param options - Options for the tool.
     * @returns A tool that runs the agent and returns the output text.
     */ asTool(options) {
        const { toolName, toolDescription, customOutputExtractor, needsApproval, runConfig, runOptions } = options;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tool"])({
            name: toolName !== null && toolName !== void 0 ? toolName : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$tools$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFunctionToolName"])(this.name),
            description: toolDescription !== null && toolDescription !== void 0 ? toolDescription : '',
            parameters: AgentAsToolNeedApprovalSchame,
            strict: true,
            needsApproval,
            execute: async (data, context, details)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAgentToolInput"])(data)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBehaviorError"]('Agent tool called with invalid input');
                }
                const runner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$run$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Runner"](runConfig !== null && runConfig !== void 0 ? runConfig : {});
                const result = await runner.run(this, data.input, {
                    context,
                    ...runOptions !== null && runOptions !== void 0 ? runOptions : {}
                });
                const outputText = typeof customOutputExtractor === 'function' ? await customOutputExtractor(result) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$messages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOutputText"])(result.rawResponses[result.rawResponses.length - 1]);
                if (details === null || details === void 0 ? void 0 : details.toolCall) {
                    saveAgentToolRunResult(details.toolCall, result);
                }
                return outputText;
            }
        });
    }
    /**
     * Returns the system prompt for the agent.
     *
     * If the agent has a function as its instructions, this function will be called with the
     * runContext and the agent instance.
     */ async getSystemPrompt(runContext) {
        if (typeof this.instructions === 'function') {
            return await this.instructions(runContext, this);
        }
        return this.instructions;
    }
    /**
     * Returns the prompt template for the agent, if defined.
     *
     * If the agent has a function as its prompt, this function will be called with the
     * runContext and the agent instance.
     */ async getPrompt(runContext) {
        if (typeof this.prompt === 'function') {
            return await this.prompt(runContext, this);
        }
        return this.prompt;
    }
    /**
     * Fetches the available tools from the MCP servers.
     * @returns the MCP powered tools
     */ async getMcpTools(runContext) {
        if (this.mcpServers.length > 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$mcp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMcpTools"])({
                mcpServers: this.mcpServers,
                runContext,
                agent: this,
                convertSchemasToStrict: false
            });
        }
        return [];
    }
    /**
     * ALl agent tools, including the MCPl and function tools.
     *
     * @returns all configured tools
     */ async getAllTools(runContext) {
        return [
            ...await this.getMcpTools(runContext),
            ...this.tools
        ];
    }
    /**
     * Processes the final output of the agent.
     *
     * @param output - The output of the agent.
     * @returns The parsed out.
     */ processFinalOutput(output) {
        if (this.outputType === 'text') {
            return output;
        }
        if (typeof this.outputType === 'object') {
            const parsed = JSON.parse(output);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$utils$2f$typeGuards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZodObject"])(this.outputType)) {
                return this.outputType.parse(parsed);
            }
            return parsed;
        }
        throw new Error("Unknown output type: ".concat(this.outputType));
    }
    /**
     * Returns a JSON representation of the agent, which is serializable.
     *
     * @returns A JSON object containing the agent's name.
     */ toJSON() {
        return {
            name: this.name
        };
    }
    constructor(config){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "instructions", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "prompt", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "handoffDescription", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "handoffs", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "model", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "modelSettings", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "tools", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "mcpServers", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inputGuardrails", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "outputGuardrails", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "outputType", 'text'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "toolUseBehavior", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resetToolChoice", void 0);
        if (typeof config.name !== 'string' || config.name.trim() === '') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserError"]('Agent must have a name.');
        }
        this.name = config.name;
        var _config_instructions;
        this.instructions = (_config_instructions = config.instructions) !== null && _config_instructions !== void 0 ? _config_instructions : Agent.DEFAULT_MODEL_PLACEHOLDER;
        this.prompt = config.prompt;
        var _config_handoffDescription;
        this.handoffDescription = (_config_handoffDescription = config.handoffDescription) !== null && _config_handoffDescription !== void 0 ? _config_handoffDescription : '';
        var _config_handoffs;
        this.handoffs = (_config_handoffs = config.handoffs) !== null && _config_handoffs !== void 0 ? _config_handoffs : [];
        var _config_model;
        this.model = (_config_model = config.model) !== null && _config_model !== void 0 ? _config_model : '';
        var _config_modelSettings;
        this.modelSettings = (_config_modelSettings = config.modelSettings) !== null && _config_modelSettings !== void 0 ? _config_modelSettings : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$defaultModel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultModelSettings"])();
        var _config_tools;
        this.tools = (_config_tools = config.tools) !== null && _config_tools !== void 0 ? _config_tools : [];
        var _config_mcpServers;
        this.mcpServers = (_config_mcpServers = config.mcpServers) !== null && _config_mcpServers !== void 0 ? _config_mcpServers : [];
        var _config_inputGuardrails;
        this.inputGuardrails = (_config_inputGuardrails = config.inputGuardrails) !== null && _config_inputGuardrails !== void 0 ? _config_inputGuardrails : [];
        var _config_outputGuardrails;
        this.outputGuardrails = (_config_outputGuardrails = config.outputGuardrails) !== null && _config_outputGuardrails !== void 0 ? _config_outputGuardrails : [];
        if (config.outputType) {
            this.outputType = config.outputType;
        }
        var _config_toolUseBehavior;
        this.toolUseBehavior = (_config_toolUseBehavior = config.toolUseBehavior) !== null && _config_toolUseBehavior !== void 0 ? _config_toolUseBehavior : 'run_llm_again';
        var _config_resetToolChoice;
        this.resetToolChoice = (_config_resetToolChoice = config.resetToolChoice) !== null && _config_resetToolChoice !== void 0 ? _config_resetToolChoice : true;
        if (// The user sets a non-default model
        config.model !== undefined && // The default model is gpt-5
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$defaultModel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGpt5Default"])() && // However, the specified model is not a gpt-5 model
        (typeof config.model !== 'string' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$defaultModel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gpt5ReasoningSettingsRequired"])(config.model)) && // The model settings are not customized for the specified model
        config.modelSettings === undefined) {
            // In this scenario, we should use a generic model settings
            // because non-gpt-5 models are not compatible with the default gpt-5 model settings.
            // This is a best-effort attempt to make the agent work with non-gpt-5 models.
            this.modelSettings = {};
        }
        // --- Runtime warning for handoff output type compatibility ---
        if (config.handoffOutputTypeWarningEnabled === undefined || config.handoffOutputTypeWarningEnabled) {
            if (this.handoffs && this.outputType) {
                const outputTypes = new Set([
                    JSON.stringify(this.outputType)
                ]);
                for (const h of this.handoffs){
                    if ('outputType' in h && h.outputType) {
                        outputTypes.add(JSON.stringify(h.outputType));
                    } else if ('agent' in h && h.agent.outputType) {
                        outputTypes.add(JSON.stringify(h.agent.outputType));
                    }
                }
                if (outputTypes.size > 1) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn("[Agent] Warning: Handoff agents have different output types: ".concat(Array.from(outputTypes).join(', '), ". You can make it type-safe by using Agent.create({ ... }) method instead."));
                }
            }
        }
    }
} //# sourceMappingURL=agent.mjs.map
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Agent, "DEFAULT_MODEL_PLACEHOLDER", '');
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/helpers/message.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a user message entry
 *
 * @param input The input message from the user
 * @param options Any additional options that will be directly passed to the model
 * @returns a message entry
 */ __turbopack_context__.s([
    "assistant",
    ()=>assistant,
    "system",
    ()=>system,
    "user",
    ()=>user
]);
function user(input, options) {
    return {
        type: 'message',
        role: 'user',
        content: typeof input === 'string' ? [
            {
                type: 'input_text',
                text: input
            }
        ] : input,
        providerData: options
    };
}
function system(input, options) {
    return {
        type: 'message',
        role: 'system',
        content: input,
        providerData: options
    };
}
function assistant(content, options) {
    return {
        type: 'message',
        role: 'assistant',
        content: typeof content === 'string' ? [
            {
                type: 'output_text',
                text: content
            }
        ] : content,
        status: 'completed',
        providerData: options
    };
} //# sourceMappingURL=message.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/mcpUtil.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Convenience helper to create a static tool filter. */ __turbopack_context__.s([
    "createMCPToolStaticFilter",
    ()=>createMCPToolStaticFilter
]);
function createMCPToolStaticFilter(options) {
    if (!(options === null || options === void 0 ? void 0 : options.allowed) && !(options === null || options === void 0 ? void 0 : options.blocked)) {
        return undefined;
    }
    const filter = {};
    if (options === null || options === void 0 ? void 0 : options.allowed) {
        filter.allowedToolNames = options.allowed;
    }
    if (options === null || options === void 0 ? void 0 : options.blocked) {
        filter.blockedToolNames = options.blocked;
    }
    return filter;
} //# sourceMappingURL=mcpUtil.mjs.map
}),
"[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$processor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/processor.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$shims$2f$shims$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/shims/shims-browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$agent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/agent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/events.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$guardrail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/guardrail.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/handoff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$helpers$2f$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/helpers/message.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$items$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/items.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$lifecycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/lifecycle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/logger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$mcp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/mcp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$mcpUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/mcpUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$defaultModel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/defaultModel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$providers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/providers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$result$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/result.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$run$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/run.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$runState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/runState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tool.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/tracing/provider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$usage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/usage.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$types$2f$protocol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-core@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents-core/dist/types/protocol.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Add the default processor, which exports traces and spans to the backend in batches. You can
 * change the default behavior by either:
 * 1. calling addTraceProcessor, which adds additional processors, or
 * 2. calling setTraceProcessors, which sets the processors and discards the default one
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addTraceProcessor"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$core$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$core$2f$dist$2f$tracing$2f$processor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultProcessor"])()); //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=3eb5a_%40openai_agents-core_dist_1f71c1d0._.js.map