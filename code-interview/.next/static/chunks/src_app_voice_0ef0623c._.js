(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/voice/contexts/TranscriptContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TranscriptProvider",
    ()=>TranscriptProvider,
    "useTranscript",
    ()=>useTranscript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const TranscriptContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TranscriptProvider(param) {
    let { children } = param;
    _s();
    const [transcriptItems, setTranscriptItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function newTimestampPretty() {
        const now = new Date();
        const time = now.toLocaleTimeString([], {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        const ms = now.getMilliseconds().toString().padStart(3, "0");
        return "".concat(time, ".").concat(ms);
    }
    const addTranscriptMessage = function(itemId, role) {
        let text = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", isHidden = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        setTranscriptItems((prev)=>{
            if (prev.some((item)=>item.itemId === itemId)) {
                return prev;
            }
            const newItem = {
                itemId,
                type: "MESSAGE",
                role,
                title: text,
                data: undefined,
                expanded: false,
                timestamp: newTimestampPretty(),
                createdAtMs: Date.now(),
                status: "IN_PROGRESS",
                isHidden
            };
            return [
                ...prev,
                newItem
            ];
        });
    };
    const updateTranscriptMessage = (itemId, newText, append)=>{
        setTranscriptItems((prev)=>prev.map((item)=>{
                var _item_title;
                return item.itemId === itemId && item.type === "MESSAGE" ? {
                    ...item,
                    title: append ? "".concat((_item_title = item.title) !== null && _item_title !== void 0 ? _item_title : "").concat(newText) : newText,
                    status: "DONE"
                } : item;
            }));
    };
    const addTranscriptBreadcrumb = (title, data)=>{
        setTranscriptItems((prev)=>[
                ...prev,
                {
                    itemId: "breadcrumb-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()),
                    type: "BREADCRUMB",
                    title,
                    data,
                    expanded: false,
                    timestamp: newTimestampPretty(),
                    createdAtMs: Date.now(),
                    status: "DONE",
                    isHidden: false
                }
            ]);
    };
    const toggleTranscriptItemExpand = (itemId)=>{
        setTranscriptItems((prev)=>prev.map((item)=>item.itemId === itemId ? {
                    ...item,
                    expanded: !item.expanded
                } : item));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TranscriptContext.Provider, {
        value: {
            transcriptItems,
            addTranscriptMessage,
            updateTranscriptMessage,
            addTranscriptBreadcrumb,
            toggleTranscriptItemExpand
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/voice/contexts/TranscriptContext.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(TranscriptProvider, "+sUad3bxNklCsbXWeXfmzYRX8sw=");
_c = TranscriptProvider;
function useTranscript() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TranscriptContext);
    if (!ctx) {
        throw new Error("useTranscript must be used within a TranscriptProvider");
    }
    return ctx;
}
_s1(useTranscript, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "TranscriptProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/contexts/EventContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventProvider",
    ()=>EventProvider,
    "useEvent",
    ()=>useEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const EventContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function EventProvider(param) {
    let { children } = param;
    _s();
    const [loggedEvents, setLoggedEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function addLoggedEvent(direction, name, data) {
        const id = data.event_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        setLoggedEvents((prev)=>[
                ...prev,
                {
                    id,
                    direction,
                    eventName: name,
                    eventData: data,
                    timestamp: new Date().toLocaleTimeString(),
                    expanded: false
                }
            ]);
    }
    const logClientEvent = function(eventObj) {
        let suffix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const name = "".concat(eventObj.type || "", " ").concat(suffix).trim();
        addLoggedEvent("client", name, eventObj);
    };
    const logServerEvent = function(eventObj) {
        let suffix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const name = "".concat(eventObj.type || "", " ").concat(suffix).trim();
        addLoggedEvent("server", name, eventObj);
    };
    const toggleExpand = (id)=>{
        setLoggedEvents((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    expanded: !item.expanded
                } : item));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventContext.Provider, {
        value: {
            loggedEvents,
            logClientEvent,
            logServerEvent,
            toggleExpand
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/voice/contexts/EventContext.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(EventProvider, "OQM0a1MYMbIHSGHGdF9/IOxjTqs=");
_c = EventProvider;
function useEvent() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(EventContext);
    if (!ctx) {
        throw new Error("useEvent must be used within an EventProvider");
    }
    return ctx;
}
_s1(useEvent, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "EventProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/lib/codecUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyCodecPreferences",
    ()=>applyCodecPreferences,
    "audioFormatForCodec",
    ()=>audioFormatForCodec
]);
function audioFormatForCodec(codec) {
    const lower = codec.toLowerCase();
    if (lower === "pcmu") return "g711_ulaw";
    if (lower === "pcma") return "g711_alaw";
    return "pcm16";
}
function applyCodecPreferences(pc, codec) {
    try {
        var _sender_getCapabilities;
        const sender = RTCRtpSender;
        const capabilities = (_sender_getCapabilities = sender.getCapabilities) === null || _sender_getCapabilities === void 0 ? void 0 : _sender_getCapabilities.call(sender, "audio");
        if (!capabilities) return;
        const target = capabilities.codecs.find((c)=>c.mimeType.toLowerCase() === "audio/".concat(codec.toLowerCase()));
        if (!target) return;
        pc.getTransceivers().filter((transceiver)=>{
            var _transceiver_sender_track, _transceiver_sender;
            return ((_transceiver_sender = transceiver.sender) === null || _transceiver_sender === void 0 ? void 0 : (_transceiver_sender_track = _transceiver_sender.track) === null || _transceiver_sender_track === void 0 ? void 0 : _transceiver_sender_track.kind) === "audio";
        }).forEach((transceiver)=>transceiver.setCodecPreferences([
                target
            ]));
    } catch (err) {
        console.error("Failed to apply codec preferences", err);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/hooks/useHandleSessionHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHandleSessionHistory",
    ()=>useHandleSessionHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/contexts/TranscriptContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/contexts/EventContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useHandleSessionHistory() {
    _s();
    const { addTranscriptBreadcrumb, addTranscriptMessage, updateTranscriptMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscript"])();
    const { logServerEvent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])();
    const extractMessageText = function() {
        let content = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return content.map((item)=>{
            if (!item) return "";
            if (item.type === "input_text" || item.type === "output_text") {
                var _item_text;
                return (_item_text = item.text) !== null && _item_text !== void 0 ? _item_text : "";
            }
            if (item.type === "audio") {
                var _item_transcript;
                return (_item_transcript = item.transcript) !== null && _item_transcript !== void 0 ? _item_transcript : "";
            }
            return "";
        }).filter(Boolean).join("\n");
    };
    function handleHistoryAdded(item) {
        if (!item || item.type !== "message") return;
        const { itemId, role, content = [] } = item;
        if (!itemId || !role) return;
        const text = extractMessageText(content) || (role === "user" ? "[Listening...]" : "");
        addTranscriptMessage(itemId, role, text);
    }
    function handleHistoryUpdated(items) {
        items.forEach((item)=>{
            if (!item || item.type !== "message") return;
            const { itemId, content = [] } = item;
            if (!itemId) return;
            const text = extractMessageText(content);
            if (text) {
                updateTranscriptMessage(itemId, text, false);
            }
        });
    }
    function handleTranscriptionDelta(event) {
        const itemId = event.item_id;
        const deltaText = event.delta || "";
        if (itemId && deltaText) {
            updateTranscriptMessage(itemId, deltaText, true);
        }
    }
    function handleTranscriptionCompleted(event) {
        const itemId = event.item_id;
        const finalTranscript = event.transcript || "";
        if (itemId) {
            updateTranscriptMessage(itemId, finalTranscript || "[inaudible]", false);
        }
    }
    function handleTransportEvent(event) {
        logServerEvent(event);
    }
    const handlersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        handleHistoryAdded,
        handleHistoryUpdated,
        handleTranscriptionDelta,
        handleTranscriptionCompleted,
        handleTransportEvent,
        addTranscriptBreadcrumb
    });
    return handlersRef;
}
_s(useHandleSessionHistory, "E8r9Jf1MbgOQBNVfNavgYF8v8JY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscript"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/hooks/useRealtimeSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRealtimeSession",
    ()=>useRealtimeSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2f$dist$2f$realtime$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents/dist/realtime/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$realtime$40$0$2e$1$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$realtime$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-realtime@0.1.6_zod@3.25.76/node_modules/@openai/agents-realtime/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$lib$2f$codecUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/lib/codecUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/contexts/EventContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useHandleSessionHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/hooks/useHandleSessionHistory.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useRealtimeSession() {
    let callbacks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("DISCONNECTED");
    const { logClientEvent, logServerEvent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])();
    const historyHandlersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useHandleSessionHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHandleSessionHistory"])();
    var _process_env_NEXT_PUBLIC_REALTIME_MODEL;
    const realtimeModel = (_process_env_NEXT_PUBLIC_REALTIME_MODEL = ("TURBOPACK compile-time value", "gpt-realtime")) !== null && _process_env_NEXT_PUBLIC_REALTIME_MODEL !== void 0 ? _process_env_NEXT_PUBLIC_REALTIME_MODEL : "gpt-4o-realtime-preview-2025-06-03";
    const updateStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSession.useCallback[updateStatus]": (next)=>{
            var _callbacks_onConnectionChange;
            setStatus(next);
            (_callbacks_onConnectionChange = callbacks.onConnectionChange) === null || _callbacks_onConnectionChange === void 0 ? void 0 : _callbacks_onConnectionChange.call(callbacks, next);
            logClientEvent({
                type: "status_change",
                value: next
            });
        }
    }["useRealtimeSession.useCallback[updateStatus]"], [
        callbacks,
        logClientEvent
    ]);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSession.useCallback[connect]": async (param)=>{
            let { getEphemeralKey, agent, audioElement, extraContext, outputGuardrails } = param;
            if (sessionRef.current) return;
            updateStatus("CONNECTING");
            const key = await getEphemeralKey();
            var _get;
            const codec = ("TURBOPACK compile-time truthy", 1) ? (_get = new URLSearchParams(window.location.search).get("codec")) !== null && _get !== void 0 ? _get : "opus" : "TURBOPACK unreachable";
            const codecParam = codec.toLowerCase();
            const audioFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$lib$2f$codecUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioFormatForCodec"])(codecParam);
            const session = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$realtime$40$0$2e$1$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$realtime$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeSession"](agent, {
                transport: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$realtime$40$0$2e$1$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$realtime$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenAIRealtimeWebRTC"]({
                    audioElement,
                    changePeerConnection: {
                        "useRealtimeSession.useCallback[connect]": async (pc)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$lib$2f$codecUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCodecPreferences"])(pc, codecParam);
                            return pc;
                        }
                    }["useRealtimeSession.useCallback[connect]"]
                }),
                model: realtimeModel,
                config: {
                    inputAudioFormat: audioFormat,
                    outputAudioFormat: audioFormat,
                    inputAudioTranscription: {
                        model: "gpt-4o-mini-transcribe"
                    }
                },
                outputGuardrails: outputGuardrails !== null && outputGuardrails !== void 0 ? outputGuardrails : [],
                context: extraContext !== null && extraContext !== void 0 ? extraContext : {}
            });
            session.on("connected", {
                "useRealtimeSession.useCallback[connect]": ()=>logServerEvent({
                        type: "connected"
                    })
            }["useRealtimeSession.useCallback[connect]"]);
            session.on("disconnected", {
                "useRealtimeSession.useCallback[connect]": ()=>logServerEvent({
                        type: "disconnected"
                    })
            }["useRealtimeSession.useCallback[connect]"]);
            session.on("error", {
                "useRealtimeSession.useCallback[connect]": (err)=>{
                    logServerEvent({
                        type: "error",
                        error: err
                    });
                }
            }["useRealtimeSession.useCallback[connect]"]);
            session.on("history_added", {
                "useRealtimeSession.useCallback[connect]": (item)=>{
                    historyHandlersRef.current.handleHistoryAdded(item);
                }
            }["useRealtimeSession.useCallback[connect]"]);
            session.on("history_updated", {
                "useRealtimeSession.useCallback[connect]": (items)=>{
                    historyHandlersRef.current.handleHistoryUpdated(items);
                }
            }["useRealtimeSession.useCallback[connect]"]);
            session.on("agent_output_created", {
                "useRealtimeSession.useCallback[connect]": (event)=>{
                    historyHandlersRef.current.handleTransportEvent(event);
                }
            }["useRealtimeSession.useCallback[connect]"]);
            session.on("transport_event", {
                "useRealtimeSession.useCallback[connect]": (event)=>{
                    switch(event.type){
                        case "conversation.item.input_audio_transcription.delta":
                            historyHandlersRef.current.handleTranscriptionDelta(event);
                            break;
                        case "conversation.item.input_audio_transcription.completed":
                        case "response.audio_transcript.done":
                            historyHandlersRef.current.handleTranscriptionCompleted(event);
                            break;
                        default:
                            historyHandlersRef.current.handleTransportEvent(event);
                    }
                }
            }["useRealtimeSession.useCallback[connect]"]);
            sessionRef.current = session;
            try {
                await session.connect({
                    apiKey: key
                });
                updateStatus("CONNECTED");
            } catch (error) {
                logServerEvent({
                    type: "connection_error",
                    message: error instanceof Error ? error.message : String(error)
                });
                session.close();
                sessionRef.current = null;
                updateStatus("DISCONNECTED");
                throw error;
            }
        }
    }["useRealtimeSession.useCallback[connect]"], [
        updateStatus,
        historyHandlersRef,
        logServerEvent,
        realtimeModel
    ]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSession.useCallback[disconnect]": ()=>{
            var _sessionRef_current;
            (_sessionRef_current = sessionRef.current) === null || _sessionRef_current === void 0 ? void 0 : _sessionRef_current.close();
            sessionRef.current = null;
            updateStatus("DISCONNECTED");
        }
    }["useRealtimeSession.useCallback[disconnect]"], [
        updateStatus
    ]);
    const interrupt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSession.useCallback[interrupt]": ()=>{
            var _sessionRef_current;
            (_sessionRef_current = sessionRef.current) === null || _sessionRef_current === void 0 ? void 0 : _sessionRef_current.interrupt();
        }
    }["useRealtimeSession.useCallback[interrupt]"], []);
    const sendUserText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSession.useCallback[sendUserText]": (text)=>{
            if (!sessionRef.current) throw new Error("Session not connected");
            sessionRef.current.sendMessage(text);
        }
    }["useRealtimeSession.useCallback[sendUserText]"], []);
    const sendEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSession.useCallback[sendEvent]": (event)=>{
            var _sessionRef_current;
            (_sessionRef_current = sessionRef.current) === null || _sessionRef_current === void 0 ? void 0 : _sessionRef_current.transport.sendEvent(event);
        }
    }["useRealtimeSession.useCallback[sendEvent]"], []);
    const mute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSession.useCallback[mute]": (shouldMute)=>{
            var _sessionRef_current;
            (_sessionRef_current = sessionRef.current) === null || _sessionRef_current === void 0 ? void 0 : _sessionRef_current.mute(shouldMute);
        }
    }["useRealtimeSession.useCallback[mute]"], []);
    return {
        status,
        connect,
        disconnect,
        sendUserText,
        sendEvent,
        mute,
        interrupt
    };
}
_s(useRealtimeSession, "mmWV01g/Qft8GBMj8dQ8GuMEJFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useHandleSessionHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHandleSessionHistory"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/lib/audioUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertWebMBlobToWav",
    ()=>convertWebMBlobToWav,
    "encodeWAV",
    ()=>encodeWAV,
    "floatTo16BitPCM",
    ()=>floatTo16BitPCM,
    "writeString",
    ()=>writeString
]);
function writeString(view, offset, str) {
    for(let i = 0; i < str.length; i++){
        view.setUint8(offset + i, str.charCodeAt(i));
    }
}
function floatTo16BitPCM(output, offset, input) {
    for(let i = 0; i < input.length; i++, offset += 2){
        const s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
}
function encodeWAV(samples, sampleRate) {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);
    writeString(view, 0, "RIFF");
    view.setUint32(4, 36 + samples.length * 2, true);
    writeString(view, 8, "WAVE");
    writeString(view, 12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, "data");
    view.setUint32(40, samples.length * 2, true);
    floatTo16BitPCM(view, 44, samples);
    return buffer;
}
async function convertWebMBlobToWav(blob) {
    const arrayBuffer = await blob.arrayBuffer();
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const numChannels = audioBuffer.numberOfChannels;
    const length = audioBuffer.length;
    const combined = new Float32Array(length);
    for(let channel = 0; channel < numChannels; channel++){
        const channelData = audioBuffer.getChannelData(channel);
        for(let i = 0; i < length; i++){
            combined[i] += channelData[i];
        }
    }
    for(let i = 0; i < length; i++){
        combined[i] /= numChannels;
    }
    const wavBuffer = encodeWAV(combined, audioBuffer.sampleRate);
    return new Blob([
        wavBuffer
    ], {
        type: "audio/wav"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/hooks/useAudioDownload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$lib$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/lib/audioUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useAudioDownload() {
    _s();
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordedChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const startRecording = async (remoteStream)=>{
        let micStream;
        try {
            micStream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
        } catch (err) {
            console.error("Error getting microphone stream:", err);
            micStream = new MediaStream();
        }
        const audioContext = new AudioContext();
        const destination = audioContext.createMediaStreamDestination();
        try {
            const remoteSource = audioContext.createMediaStreamSource(remoteStream);
            remoteSource.connect(destination);
        } catch (err) {
            console.error("Unable to connect remote stream:", err);
        }
        try {
            const micSource = audioContext.createMediaStreamSource(micStream);
            micSource.connect(destination);
        } catch (err) {
            console.error("Unable to connect microphone stream:", err);
        }
        const options = {
            mimeType: "audio/webm"
        };
        try {
            const mediaRecorder = new MediaRecorder(destination.stream, options);
            mediaRecorder.ondataavailable = (event)=>{
                if (event.data && event.data.size > 0) {
                    recordedChunksRef.current.push(event.data);
                }
            };
            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;
        } catch (err) {
            console.error("Error starting MediaRecorder:", err);
        }
    };
    const stopRecording = ()=>{
        if (!mediaRecorderRef.current) return;
        mediaRecorderRef.current.requestData();
        mediaRecorderRef.current.stop();
        mediaRecorderRef.current = null;
    };
    const downloadRecording = async ()=>{
        var _mediaRecorderRef_current;
        if (((_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.state) === "recording") {
            mediaRecorderRef.current.requestData();
            await new Promise((resolve)=>setTimeout(resolve, 100));
        }
        if (recordedChunksRef.current.length === 0) {
            console.warn("No recorded audio chunks available");
            return;
        }
        const webmBlob = new Blob(recordedChunksRef.current, {
            type: "audio/webm"
        });
        try {
            const wavBlob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$lib$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertWebMBlobToWav"])(webmBlob);
            const url = URL.createObjectURL(wavBlob);
            const now = new Date().toISOString().replace(/[:.]/g, "-");
            const a = document.createElement("a");
            a.href = url;
            a.download = "voice-agent-".concat(now, ".wav");
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(()=>URL.revokeObjectURL(url), 100);
        } catch (err) {
            console.error("Failed to convert WebM to WAV:", err);
        }
    };
    return {
        startRecording,
        stopRecording,
        downloadRecording
    };
}
_s(useAudioDownload, "s728heH5QqxUn5jv3EL/nWXh300=");
const __TURBOPACK__default__export__ = useAudioDownload;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/components/Transcript.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transcript",
    ()=>Transcript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$14_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.1.14_react@19.1.0/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/contexts/TranscriptContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Transcript(param) {
    let { userText, setUserText, onSendMessage, canSend, downloadRecording } = param;
    _s();
    const { transcriptItems, toggleTranscriptItemExpand } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscript"])();
    const transcriptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [previousItemsLength, setPreviousItemsLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [justCopied, setJustCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Transcript.useEffect": ()=>{
            if (!transcriptRef.current) return;
            if (transcriptItems.length !== previousItemsLength) {
                transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
                setPreviousItemsLength(transcriptItems.length);
            }
        }
    }["Transcript.useEffect"], [
        transcriptItems,
        previousItemsLength
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Transcript.useEffect": ()=>{
            if (canSend && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["Transcript.useEffect"], [
        canSend
    ]);
    const handleCopyTranscript = async ()=>{
        if (!transcriptRef.current) return;
        try {
            await navigator.clipboard.writeText(transcriptRef.current.innerText);
            setJustCopied(true);
            setTimeout(()=>setJustCopied(false), 1500);
        } catch (error) {
            console.error("Failed to copy transcript", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 bg-white min-h-0 rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 py-3 sticky top-0 z-10 border-b bg-white rounded-t-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: "Transcript"
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/components/Transcript.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopyTranscript,
                                className: "text-sm px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300",
                                children: justCopied ? "Copied!" : "Copy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: downloadRecording,
                                className: "text-sm px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300",
                                children: "Download Audio"
                            }, void 0, false, {
                                fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/voice/components/Transcript.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voice/components/Transcript.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: transcriptRef,
                className: "overflow-auto p-4 flex flex-col gap-y-4 h-full",
                children: [
                    ...transcriptItems
                ].sort((a, b)=>a.createdAtMs - b.createdAtMs).map((item)=>{
                    if (item.isHidden) return null;
                    if (item.type === "MESSAGE") {
                        const isUser = item.role === "user";
                        const containerClass = "flex flex-col ".concat(isUser ? "items-end" : "items-start");
                        const bubbleClass = "max-w-lg p-3 rounded-2xl ".concat(isUser ? "bg-gray-900 text-white rounded-br-none" : "bg-gray-100 text-gray-900 rounded-bl-none");
                        var _item_title;
                        const content = (_item_title = item.title) !== null && _item_title !== void 0 ? _item_title : "";
                        const isBracketed = content.startsWith("[") && content.endsWith("]");
                        const display = isBracketed ? content.slice(1, -1) : content;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: containerClass,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: bubbleClass,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 font-mono mb-1",
                                        children: item.timestamp
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                        lineNumber: 100,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "whitespace-pre-wrap ".concat(isBracketed ? "italic text-gray-300" : ""),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$14_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                            children: display
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                            lineNumber: 104,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                        lineNumber: 103,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                lineNumber: 99,
                                columnNumber: 19
                            }, this)
                        }, item.itemId, false, {
                            fileName: "[project]/src/app/voice/components/Transcript.tsx",
                            lineNumber: 98,
                            columnNumber: 17
                        }, this);
                    }
                    if (item.type === "BREADCRUMB") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col text-sm text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-mono text-gray-400",
                                    children: item.timestamp
                                }, void 0, false, {
                                    fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                    lineNumber: 117,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "whitespace-pre-wrap font-mono cursor-pointer ".concat(item.data ? "flex items-center" : ""),
                                    onClick: ()=>item.data && toggleTranscriptItemExpand(item.itemId),
                                    children: [
                                        item.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2 transition-transform duration-200 ".concat(item.expanded ? "rotate-90" : "rotate-0"),
                                            children: "▶"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                            lineNumber: 127,
                                            columnNumber: 23
                                        }, this),
                                        item.title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                    lineNumber: 120,
                                    columnNumber: 19
                                }, this),
                                item.expanded && item.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "border-l-2 border-gray-200 ml-1 pl-2 text-xs text-gray-800 whitespace-pre-wrap",
                                    children: JSON.stringify(item.data, null, 2)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/voice/components/Transcript.tsx",
                                    lineNumber: 138,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, item.itemId, true, {
                            fileName: "[project]/src/app/voice/components/Transcript.tsx",
                            lineNumber: 113,
                            columnNumber: 17
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500 text-xs",
                        children: "Unknown item type"
                    }, item.itemId, false, {
                        fileName: "[project]/src/app/voice/components/Transcript.tsx",
                        lineNumber: 147,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/voice/components/Transcript.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex items-center gap-x-2 border-t border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        value: userText,
                        onChange: (e)=>setUserText(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" && canSend) {
                                onSendMessage();
                            }
                        },
                        placeholder: "Type a message...",
                        className: "flex-1 px-4 py-2 border rounded-lg focus:outline-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/components/Transcript.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSendMessage,
                        disabled: !canSend || !userText.trim(),
                        className: "bg-gray-900 text-white px-4 py-2 rounded-lg disabled:opacity-50",
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/components/Transcript.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voice/components/Transcript.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/voice/components/Transcript.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Transcript, "eO7C4T0MnrIEpfFLPEsRWDvTDMY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscript"]
    ];
});
_c = Transcript;
var _c;
__turbopack_context__.k.register(_c, "Transcript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/components/Events.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Events",
    ()=>Events
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/contexts/EventContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Events(param) {
    let { isExpanded } = param;
    _s();
    const { loggedEvents, toggleExpand } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [previousCount, setPreviousCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Events.useEffect": ()=>{
            if (!containerRef.current) return;
            const hasNew = loggedEvents.length > previousCount;
            if (isExpanded && hasNew) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
            setPreviousCount(loggedEvents.length);
        }
    }["Events.useEffect"], [
        loggedEvents,
        isExpanded,
        previousCount
    ]);
    const arrowForDirection = (direction)=>{
        switch(direction){
            case "client":
                return {
                    symbol: "▲",
                    color: "#7f5af0"
                };
            case "server":
                return {
                    symbol: "▼",
                    color: "#2cb67d"
                };
            default:
                return {
                    symbol: "•",
                    color: "#999"
                };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "".concat(isExpanded ? "w-1/2 opacity-100" : "w-0 opacity-0", " transition-all duration-200 ease-in-out bg-white rounded-xl overflow-hidden"),
        children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-3 border-b font-semibold",
                    children: "Logs"
                }, void 0, false, {
                    fileName: "[project]/src/app/voice/components/Events.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto",
                    children: loggedEvents.map((event)=>{
                        var _event_eventData_response_status_details, _event_eventData_response, _event_eventData;
                        const arrow = arrowForDirection(event.direction);
                        const isError = event.eventName.toLowerCase().includes("error") || Boolean((_event_eventData = event.eventData) === null || _event_eventData === void 0 ? void 0 : (_event_eventData_response = _event_eventData.response) === null || _event_eventData_response === void 0 ? void 0 : (_event_eventData_response_status_details = _event_eventData_response.status_details) === null || _event_eventData_response_status_details === void 0 ? void 0 : _event_eventData_response_status_details.error);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-gray-200 px-6 py-2 text-sm font-mono",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between cursor-pointer",
                                    onClick: ()=>toggleExpand(event.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: arrow.color
                                                    },
                                                    children: arrow.symbol
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/voice/components/Events.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: isError ? "text-red-600" : "text-gray-800",
                                                    children: event.eventName || "(unnamed)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/voice/components/Events.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/voice/components/Events.tsx",
                                            lineNumber: 61,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: event.timestamp
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/voice/components/Events.tsx",
                                            lineNumber: 67,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/voice/components/Events.tsx",
                                    lineNumber: 57,
                                    columnNumber: 19
                                }, this),
                                event.expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "text-xs text-gray-800 whitespace-pre-wrap break-words border-l-2 border-gray-200 mt-2 pl-2",
                                    children: JSON.stringify(event.eventData, null, 2)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/voice/components/Events.tsx",
                                    lineNumber: 72,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, event.id, true, {
                            fileName: "[project]/src/app/voice/components/Events.tsx",
                            lineNumber: 53,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/voice/components/Events.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/voice/components/Events.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/voice/components/Events.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Events, "PbKXiY2rDA5KgnNYi4AV/W951pc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"]
    ];
});
_c = Events;
var _c;
__turbopack_context__.k.register(_c, "Events");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/components/BottomToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomToolbar",
    ()=>BottomToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BottomToolbar(param) {
    let { sessionStatus, onToggleConnection, isPTTActive, setIsPTTActive, isPTTUserSpeaking, handleTalkButtonDown, handleTalkButtonUp, isEventsPaneExpanded, setIsEventsPaneExpanded, isAudioPlaybackEnabled, setIsAudioPlaybackEnabled } = param;
    const isConnected = sessionStatus === "CONNECTED";
    const isConnecting = sessionStatus === "CONNECTING";
    const connectionLabel = isConnected ? "Disconnect" : isConnecting ? "Connecting..." : "Connect";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 flex flex-row items-center justify-center gap-6 bg-white border-t",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggleConnection,
                disabled: isConnecting,
                className: "px-6 py-2 rounded-md text-white ".concat(isConnected ? "bg-red-600 hover:bg-red-700" : "bg-black hover:bg-gray-900", " ").concat(isConnecting ? "cursor-not-allowed opacity-70" : ""),
                children: connectionLabel
            }, void 0, false, {
                fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: isPTTActive,
                        onChange: (e)=>setIsPTTActive(e.target.checked),
                        disabled: !isConnected
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    "Push to Talk"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onMouseDown: handleTalkButtonDown,
                onMouseUp: handleTalkButtonUp,
                onTouchStart: handleTalkButtonDown,
                onTouchEnd: handleTalkButtonUp,
                disabled: !isPTTActive,
                className: "px-4 py-2 rounded-md ".concat(isPTTActive ? "bg-gray-200 hover:bg-gray-300" : "bg-gray-100 text-gray-500", " ").concat(isPTTUserSpeaking ? "ring-2 ring-gray-400" : ""),
                children: "Talk"
            }, void 0, false, {
                fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: isAudioPlaybackEnabled,
                        onChange: (e)=>setIsAudioPlaybackEnabled(e.target.checked),
                        disabled: !isConnected
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    "Audio Playback"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: isEventsPaneExpanded,
                        onChange: (e)=>setIsEventsPaneExpanded(e.target.checked)
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    "Show Logs"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/voice/components/BottomToolbar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = BottomToolbar;
var _c;
__turbopack_context__.k.register(_c, "BottomToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/voice/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceApp",
    ()=>VoiceApp,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/contexts/TranscriptContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/contexts/EventContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useRealtimeSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/hooks/useRealtimeSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useAudioDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/hooks/useAudioDownload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$components$2f$Transcript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/components/Transcript.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$components$2f$Events$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/components/Events.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$components$2f$BottomToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/voice/components/BottomToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$40$0$2e$1$2e$6_ws$40$8$2e$18$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2f$dist$2f$realtime$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents@0.1.6_ws@8.18.3_zod@3.25.76/node_modules/@openai/agents/dist/realtime/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$realtime$40$0$2e$1$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$realtime$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openai+agents-realtime@0.1.6_zod@3.25.76/node_modules/@openai/agents-realtime/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
var _process_env_NEXT_PUBLIC_REALTIME_VOICE;
const DEFAULT_VOICE = (_process_env_NEXT_PUBLIC_REALTIME_VOICE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REALTIME_VOICE) !== null && _process_env_NEXT_PUBLIC_REALTIME_VOICE !== void 0 ? _process_env_NEXT_PUBLIC_REALTIME_VOICE : "verse";
const VOICE_AGENT = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openai$2b$agents$2d$realtime$40$0$2e$1$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$openai$2f$agents$2d$realtime$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeAgent"]({
    name: "voice_assistant",
    voice: DEFAULT_VOICE,
    instructions: "You are a friendly interview coach. Speak conversationally, keep responses concise, and help candidates practice describing their experience."
});
function VoiceApp() {
    _s();
    const { addTranscriptMessage, addTranscriptBreadcrumb } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscript"])();
    const { logClientEvent, logServerEvent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])();
    const audioElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sdkAudioElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VoiceApp.useMemo[sdkAudioElement]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const el = document.createElement("audio");
            el.autoplay = true;
            el.style.display = "none";
            document.body.appendChild(el);
            return el;
        }
    }["VoiceApp.useMemo[sdkAudioElement]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceApp.useEffect": ()=>{
            if (sdkAudioElement && !audioElementRef.current) {
                audioElementRef.current = sdkAudioElement;
            }
        }
    }["VoiceApp.useEffect"], [
        sdkAudioElement
    ]);
    const { status: sessionStatus, connect, disconnect, sendUserText, sendEvent, mute, interrupt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useRealtimeSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeSession"])();
    const [userText, setUserText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEventsPaneExpanded, setIsEventsPaneExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPTTActive, setIsPTTActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPTTUserSpeaking, setIsPTTUserSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAudioPlaybackEnabled, setIsAudioPlaybackEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "VoiceApp.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const stored = window.localStorage.getItem("voice-audio-playback");
            return stored ? stored === "true" : true;
        }
    }["VoiceApp.useState"]);
    const { startRecording, stopRecording, downloadRecording } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useAudioDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceApp.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const storedPTT = window.localStorage.getItem("voice-ptt-active");
            if (storedPTT) setIsPTTActive(storedPTT === "true");
            const storedLogs = window.localStorage.getItem("voice-logs-open");
            if (storedLogs) setIsEventsPaneExpanded(storedLogs === "true");
        }
    }["VoiceApp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceApp.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem("voice-ptt-active", String(isPTTActive));
        }
    }["VoiceApp.useEffect"], [
        isPTTActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceApp.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem("voice-logs-open", String(isEventsPaneExpanded));
        }
    }["VoiceApp.useEffect"], [
        isEventsPaneExpanded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceApp.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem("voice-audio-playback", String(isAudioPlaybackEnabled));
        }
    }["VoiceApp.useEffect"], [
        isAudioPlaybackEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceApp.useEffect": ()=>{
            const el = audioElementRef.current;
            if (!el) return;
            if (isAudioPlaybackEnabled) {
                el.muted = false;
                el.play().catch({
                    "VoiceApp.useEffect": (err)=>{
                        console.warn("Autoplay blocked", err);
                    }
                }["VoiceApp.useEffect"]);
            } else {
                el.muted = true;
                el.pause();
            }
            mute(!isAudioPlaybackEnabled);
        }
    }["VoiceApp.useEffect"], [
        isAudioPlaybackEnabled,
        mute
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceApp.useEffect": ()=>{
            var _audioElementRef_current;
            if (sessionStatus === "CONNECTED" && ((_audioElementRef_current = audioElementRef.current) === null || _audioElementRef_current === void 0 ? void 0 : _audioElementRef_current.srcObject)) {
                const remoteStream = audioElementRef.current.srcObject;
                startRecording(remoteStream);
                return ({
                    "VoiceApp.useEffect": ()=>{
                        stopRecording();
                    }
                })["VoiceApp.useEffect"];
            }
            return undefined;
        }
    }["VoiceApp.useEffect"], [
        sessionStatus,
        startRecording,
        stopRecording
    ]);
    const fetchEphemeralKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[fetchEphemeralKey]": async ()=>{
            var _data_client_secret;
            logClientEvent({
                url: "/api/session"
            }, "fetch_session_token_request");
            const response = await fetch("/api/session", {
                method: "POST"
            });
            const data = await response.json();
            logServerEvent(data, "fetch_session_token_response");
            if (!response.ok) {
                const message = typeof (data === null || data === void 0 ? void 0 : data.error) === "string" ? data.error : "Failed to create session";
                throw new Error(message);
            }
            const key = data === null || data === void 0 ? void 0 : (_data_client_secret = data.client_secret) === null || _data_client_secret === void 0 ? void 0 : _data_client_secret.value;
            if (!key) {
                throw new Error("No ephemeral key returned");
            }
            return key;
        }
    }["VoiceApp.useCallback[fetchEphemeralKey]"], [
        logClientEvent,
        logServerEvent
    ]);
    const sendClientEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[sendClientEvent]": function(eventObj) {
            let suffix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            try {
                sendEvent(eventObj);
                logClientEvent(eventObj, suffix);
            } catch (err) {
                console.error("Failed to send event", err);
            }
        }
    }["VoiceApp.useCallback[sendClientEvent]"], [
        sendEvent,
        logClientEvent
    ]);
    const sendSimulatedUserMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[sendSimulatedUserMessage]": (text)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])().slice(0, 32);
            addTranscriptMessage(id, "user", text, true);
            sendClientEvent({
                type: "conversation.item.create",
                item: {
                    id,
                    type: "message",
                    role: "user",
                    content: [
                        {
                            type: "input_text",
                            text
                        }
                    ]
                }
            }, "(simulated user text message)");
            sendClientEvent({
                type: "response.create"
            }, "(auto greet)");
        }
    }["VoiceApp.useCallback[sendSimulatedUserMessage]"], [
        addTranscriptMessage,
        sendClientEvent
    ]);
    const updateSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[updateSession]": function() {
            let shouldPrompt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            const turnDetection = isPTTActive ? null : {
                type: "server_vad",
                threshold: 0.9,
                prefix_padding_ms: 300,
                silence_duration_ms: 500,
                create_response: true
            };
            sendClientEvent({
                type: "session.update",
                session: {
                    turn_detection: turnDetection
                }
            });
            if (shouldPrompt) {
                sendSimulatedUserMessage("hi");
            }
        }
    }["VoiceApp.useCallback[updateSession]"], [
        isPTTActive,
        sendClientEvent,
        sendSimulatedUserMessage
    ]);
    const connectToRealtime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[connectToRealtime]": async ()=>{
            if (sessionStatus !== "DISCONNECTED") return;
            try {
                const EPHEMERAL_KEY = await fetchEphemeralKey();
                if (!EPHEMERAL_KEY) {
                    console.error("Failed to fetch ephemeral key");
                    return;
                }
                console.log(EPHEMERAL_KEY);
                await connect({
                    getEphemeralKey: {
                        "VoiceApp.useCallback[connectToRealtime]": async ()=>EPHEMERAL_KEY
                    }["VoiceApp.useCallback[connectToRealtime]"],
                    agent: VOICE_AGENT,
                    audioElement: sdkAudioElement,
                    extraContext: {
                        addTranscriptBreadcrumb
                    }
                });
                updateSession(true);
            } catch (err) {
                console.error("Error connecting to realtime session", err);
            }
        }
    }["VoiceApp.useCallback[connectToRealtime]"], [
        sessionStatus,
        connect,
        fetchEphemeralKey,
        sdkAudioElement,
        addTranscriptBreadcrumb,
        updateSession
    ]);
    const disconnectFromRealtime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[disconnectFromRealtime]": ()=>{
            disconnect();
            setIsPTTUserSpeaking(false);
        }
    }["VoiceApp.useCallback[disconnectFromRealtime]"], [
        disconnect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceApp.useEffect": ()=>{
            if (sessionStatus === "CONNECTED") {
                updateSession(false);
            }
        }
    }["VoiceApp.useEffect"], [
        sessionStatus,
        updateSession,
        isPTTActive
    ]);
    const handleSendTextMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[handleSendTextMessage]": ()=>{
            if (!userText.trim()) return;
            interrupt();
            try {
                sendUserText(userText.trim());
                logClientEvent({
                    type: "user_message",
                    text: userText.trim()
                });
            } catch (err) {
                console.error("Failed to send user text", err);
            }
            setUserText("");
        }
    }["VoiceApp.useCallback[handleSendTextMessage]"], [
        userText,
        interrupt,
        sendUserText,
        logClientEvent
    ]);
    const handleTalkButtonDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[handleTalkButtonDown]": ()=>{
            if (sessionStatus !== "CONNECTED") return;
            interrupt();
            setIsPTTUserSpeaking(true);
            sendClientEvent({
                type: "input_audio_buffer.clear"
            }, "clear PTT buffer");
        }
    }["VoiceApp.useCallback[handleTalkButtonDown]"], [
        sessionStatus,
        interrupt,
        sendClientEvent
    ]);
    const handleTalkButtonUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[handleTalkButtonUp]": ()=>{
            if (sessionStatus !== "CONNECTED" || !isPTTUserSpeaking) return;
            setIsPTTUserSpeaking(false);
            sendClientEvent({
                type: "input_audio_buffer.commit"
            }, "commit PTT");
            sendClientEvent({
                type: "response.create"
            }, "trigger response PTT");
        }
    }["VoiceApp.useCallback[handleTalkButtonUp]"], [
        sessionStatus,
        isPTTUserSpeaking,
        sendClientEvent
    ]);
    const handleToggleConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceApp.useCallback[handleToggleConnection]": ()=>{
            if (sessionStatus === "CONNECTED" || sessionStatus === "CONNECTING") {
                disconnectFromRealtime();
            } else {
                connectToRealtime();
            }
        }
    }["VoiceApp.useCallback[handleToggleConnection]"], [
        sessionStatus,
        disconnectFromRealtime,
        connectToRealtime
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen bg-gray-100 text-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-4 text-lg font-semibold border-b bg-white flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Realtime Voice Agent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/App.tsx",
                        lineNumber: 293,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: [
                            "Status: ",
                            sessionStatus
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/voice/App.tsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voice/App.tsx",
                lineNumber: 292,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 gap-2 px-2 py-2 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$components$2f$Transcript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transcript"], {
                        userText: userText,
                        setUserText: setUserText,
                        onSendMessage: handleSendTextMessage,
                        canSend: sessionStatus === "CONNECTED",
                        downloadRecording: downloadRecording
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/App.tsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$components$2f$Events$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Events"], {
                        isExpanded: isEventsPaneExpanded
                    }, void 0, false, {
                        fileName: "[project]/src/app/voice/App.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voice/App.tsx",
                lineNumber: 298,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$components$2f$BottomToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomToolbar"], {
                sessionStatus: sessionStatus,
                onToggleConnection: handleToggleConnection,
                isPTTActive: isPTTActive,
                setIsPTTActive: setIsPTTActive,
                isPTTUserSpeaking: isPTTUserSpeaking,
                handleTalkButtonDown: handleTalkButtonDown,
                handleTalkButtonUp: handleTalkButtonUp,
                isEventsPaneExpanded: isEventsPaneExpanded,
                setIsEventsPaneExpanded: setIsEventsPaneExpanded,
                isAudioPlaybackEnabled: isAudioPlaybackEnabled,
                setIsAudioPlaybackEnabled: setIsAudioPlaybackEnabled
            }, void 0, false, {
                fileName: "[project]/src/app/voice/App.tsx",
                lineNumber: 308,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/voice/App.tsx",
        lineNumber: 291,
        columnNumber: 9
    }, this);
}
_s(VoiceApp, "iNOkp91cZzURQ/osjfsErMdRC3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$TranscriptContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscript"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$contexts$2f$EventContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useRealtimeSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$voice$2f$hooks$2f$useAudioDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = VoiceApp;
const __TURBOPACK__default__export__ = VoiceApp;
var _c;
__turbopack_context__.k.register(_c, "VoiceApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_voice_0ef0623c._.js.map