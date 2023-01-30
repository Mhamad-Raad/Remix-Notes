var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/main.css
var main_default = "/build/_assets/main-THLKTWJO.css";

// app/components/MainNavigation.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { id: "main-navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/Notes", children: "My Notes" }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var MainNavigation_default = MainNavigation;

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "an error occured!" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "an error occured!" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "error: ",
          error.message
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety!" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 57,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  let response = (0, import_react3.useCatch)(), message = ((_a = response.data) == null ? void 0 : _a.message) || "Notes Not Found!", status = response.statusText || 500;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "an error occured!" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: status }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          " ",
          message || "Something went wrong!!!"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety!" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 87,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: main_default }];
}

// app/routes/Notes.$noteId.jsx
var Notes_noteId_exports = {};
__export(Notes_noteId_exports, {
  default: () => NoteDetail,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
var import_react4 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/data/notes.js
async function getStoredNotes() {
  return await (await fetch(
    "https://note-collection-71ac2-default-rtdb.firebaseio.com/notes.json"
  )).json();
}
async function storeNotes(note) {
  await fetch(
    "https://note-collection-71ac2-default-rtdb.firebaseio.com/notes.json",
    {
      method: "POST",
      body: JSON.stringify(note)
    }
  );
}

// app/styles/note-details.css
var note_details_default = "/build/_assets/note-details-VZT2AO3O.css";

// app/routes/Notes.$noteId.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function NoteDetail() {
  let note = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { id: "note-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/notes", children: "Back to all Notes" }, void 0, !1, {
        fileName: "app/routes/Notes.$noteId.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/Notes.$noteId.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: note.title }, void 0, !1, {
        fileName: "app/routes/Notes.$noteId.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Notes.$noteId.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { id: "note-details-content", children: note.content }, void 0, !1, {
      fileName: "app/routes/Notes.$noteId.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Notes.$noteId.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
async function loader({ params }) {
  var _a;
  let data = await getStoredNotes(), noteId = params.noteId, notes = [];
  (_a = Object.keys(data)) == null || _a.forEach(function(key) {
    notes.push(data[key]);
  });
  let selectedNote = notes.find((note) => note.id === noteId);
  if (!selectedNote)
    throw (0, import_node2.json)(
      { message: `Note with id ${noteId} not found` },
      { status: 404 }
    );
  return selectedNote;
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: note_details_default
    }
  ];
}
function meta2({ data }) {
  return {
    title: data.title,
    description: "A place to keep your notes"
  };
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links3,
  meta: () => meta3
});
var import_react5 = require("@remix-run/react");

// app/styles/home.css
var home_default = "/build/_assets/home-RT3INEAE.css";

// app/routes/index.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { id: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "A better way of keeping track of your notes" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Try our early beta and never loose track of your notes again!" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { id: "cta", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "./Notes", children: "Try Now!" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function links3() {
  return [{ rel: "stylesheet", href: home_default }];
}
function meta3() {
  return {
    title: "Note Take",
    description: "Write your notes at ease"
  };
}

// app/routes/Notes.jsx
var Notes_exports = {};
__export(Notes_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => NotesPage,
  links: () => links6,
  loader: () => loader2,
  meta: () => meta4
});
var import_react8 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/components/NewNotes.jsx
var import_react6 = require("@remix-run/react");

// app/components/NewNotes.css
var NewNotes_default = "/build/_assets/NewNotes-3Z3GS4AD.css";

// app/components/NewNotes.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function NewNote() {
  let navigation = (0, import_react6.useNavigation)(), actionData = (0, import_react6.useActionData)(), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Form, { method: "post", id: "note-form", children: [
    (actionData == null ? void 0 : actionData.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: actionData.message }, void 0, !1, {
      fileName: "app/components/NewNotes.jsx",
      lineNumber: 10,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "title", children: "Title" }, void 0, !1, {
        fileName: "app/components/NewNotes.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", id: "title", name: "title", required: !0 }, void 0, !1, {
        fileName: "app/components/NewNotes.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewNotes.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "content", children: "Content" }, void 0, !1, {
        fileName: "app/components/NewNotes.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("textarea", { id: "content", name: "content", rows: "5", required: !0 }, void 0, !1, {
        fileName: "app/components/NewNotes.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewNotes.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Adding" : "Add Note" }, void 0, !1, {
      fileName: "app/components/NewNotes.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NewNotes.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewNotes.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var NewNotes_default2 = NewNote;
function links4() {
  return [{ rel: "stylesheet", href: NewNotes_default }];
}

// app/components/NotesList.jsx
var import_react7 = require("@remix-run/react");

// app/components/NotesList.css
var NotesList_default = "/build/_assets/NotesList-UI7PP37L.css";

// app/components/NotesList.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NoteList({ notes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { id: "note-list", children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: note.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "note-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          "#",
          index + 1
        ] }, void 0, !0, {
          fileName: "app/components/NotesList.jsx",
          lineNumber: 14,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }) }, void 0, !1, {
          fileName: "app/components/NotesList.jsx",
          lineNumber: 16,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/NotesList.jsx",
          lineNumber: 15,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NotesList.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: note.title }, void 0, !1, {
        fileName: "app/components/NotesList.jsx",
        lineNumber: 27,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NotesList.jsx",
      lineNumber: 12,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: note.content }, void 0, !1, {
      fileName: "app/components/NotesList.jsx",
      lineNumber: 29,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NotesList.jsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/NotesList.jsx",
    lineNumber: 10,
    columnNumber: 11
  }, this) }, note.id, !1, {
    fileName: "app/components/NotesList.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/NotesList.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var NotesList_default2 = NoteList;
function links5() {
  return [{ rel: "stylesheet", href: NotesList_default }];
}

// app/routes/Notes.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NotesPage() {
  var _a;
  let data = (0, import_react8.useLoaderData)(), notes = [];
  return (_a = Object.keys(data)) == null || _a.forEach(function(key) {
    notes.push(data[key]);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NewNotes_default2, {}, void 0, !1, {
      fileName: "app/routes/Notes.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NotesList_default2, { notes }, void 0, !1, {
      fileName: "app/routes/Notes.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Notes.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Notes Not Working!" }, void 0, !1, {
      fileName: "app/routes/Notes.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      "error: ",
      error.message
    ] }, void 0, !0, {
      fileName: "app/routes/Notes.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/", children: "safety!" }, void 0, !1, {
        fileName: "app/routes/Notes.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Notes.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Notes.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
async function loader2() {
  let notes = await getStoredNotes();
  if (!notes || notes.length === 0)
    throw (0, import_node3.json)(
      {
        message: "No notes found"
      },
      {
        status: 404,
        statusText: "Not Found"
      }
    );
  return notes;
}
function CatchBoundary2() {
  var _a;
  let message = ((_a = (0, import_react8.useCatch)().data) == null ? void 0 : _a.message) || "Notes Not Found!";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NewNotes_default2, {}, void 0, !1, {
      fileName: "app/routes/Notes.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "info-message", children: [
      "error: ",
      message
    ] }, void 0, !0, {
      fileName: "app/routes/Notes.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Notes.jsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
async function action({ request }) {
  let formData = await request.formData(), noteData = Object.fromEntries(formData);
  return noteData.title.trim() < 3 ? {
    message: "The title must be longer than 3 characters"
  } : (noteData.id = new Date().toISOString(), await storeNotes(noteData), (0, import_node3.redirect)("/Notes"));
}
function links6() {
  return [...links4(), ...links5()];
}
function meta4() {
  return {
    title: "All Notes",
    description: "A place to keep your notes"
  };
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "da4968cb", entry: { module: "/build/entry.client-F5ONEG4E.js", imports: ["/build/_shared/chunk-XZESR4NR.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4IPZOQ2J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/Notes": { id: "routes/Notes", parentId: "root", path: "Notes", index: void 0, caseSensitive: void 0, module: "/build/routes/Notes-RXSMF23R.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/Notes.$noteId": { id: "routes/Notes.$noteId", parentId: "root", path: "Notes/:noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/Notes.$noteId-XMDFUYVI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-E2SMLITW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-DA4968CB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/Notes.$noteId": {
    id: "routes/Notes.$noteId",
    parentId: "root",
    path: "Notes/:noteId",
    index: void 0,
    caseSensitive: void 0,
    module: Notes_noteId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/Notes": {
    id: "routes/Notes",
    parentId: "root",
    path: "Notes",
    index: void 0,
    caseSensitive: void 0,
    module: Notes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
