(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    8025: function(e, t, r) {
        Promise.resolve().then(r.t.bind(r, 1331, 23)),
        Promise.resolve().then(r.bind(r, 4268)),
        Promise.resolve().then(r.bind(r, 2722)),
        Promise.resolve().then(r.bind(r, 9590))
    },
    4268: function(e, t, r) {
        "use strict";
        r.d(t, {
            Age: function() {
                return m
            },
            AgeTooltip: function() {
                return x
            }
        });
        var n = r(568)
          , s = r(838)
          , a = r(1056)
          , i = r(532);
        let l = a.zt
          , d = a.fC
          , o = a.xz
          , c = s.forwardRef((e,t)=>{
            let {className: r, sideOffset: s=4, ...l} = e;
            return (0,
            n.jsx)(a.VY, {
                ref: t,
                sideOffset: s,
                className: (0,
                i.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                ...l
            })
        }
        );
        c.displayName = a.VY.displayName;
        var u = r(6377)
          , f = r.n(u);
        function x() {
            return (0,
            n.jsx)(l, {
                delayDuration: 100,
                children: (0,
                n.jsxs)(d, {
                    children: [(0,
                    n.jsx)(o, {
                        asChild: !0,
                        children: (0,
                        n.jsx)("span", {
                            className: "text-foreground hover:text-muted-foreground/50 transition-all duration-150 cursor-pointer",
                            children: "6 years old"
                        })
                    }), (0,
                    n.jsx)(c, {
                        className: "text-center max-w-[250px]",
                        children: (0,
                        n.jsx)("p", {
                            children: "Seriously, I did everything on an unused hand-me-down laptop running Windows 7."
                        })
                    })]
                })
            })
        }
        function m() {
            let[e,t] = s.useState(17);
            return s.useEffect(()=>{
                let e = setInterval(()=>{
                    t(f()().diff(1156118401e3, "year", !0))
                }
                , 50);
                return ()=>{
                    clearInterval(e)
                }
            }
            , []),
            (0,
            n.jsx)(l, {
                delayDuration: 100,
                children: (0,
                n.jsxs)(d, {
                    children: [(0,
                    n.jsx)(o, {
                        asChild: !0,
                        children: (0,
                        n.jsx)("span", {
                            className: "text-foreground hover:text-muted-foreground/50 transition-all duration-150 cursor-pointer",
                            children: "number" == typeof e ? e.toFixed(4) : e
                        })
                    }), (0,
                    n.jsx)(c, {
                        className: "text-center max-w-[250px]",
                        children: (0,
                        n.jsx)("p", {
                            children: "number" == typeof e ? e.toFixed(12) : e
                        })
                    })]
                })
            })
        }
    },
    2722: function(e, t, r) {
        "use strict";
        r.d(t, {
            LanyardProfile: function() {
                return m
            }
        });
        var n = r(568)
          , s = r(9062)
          , a = r(532);
        function i(e) {
            let {className: t, ...r} = e;
            return (0,
            n.jsx)("div", {
                className: (0,
                a.cn)("animate-pulse rounded-md bg-primary/10", t),
                ...r
            })
        }
        var l = r(5397)
          , d = r(6699)
          , o = r(838);
        let c = (0,
        s.AI)(e=>(0,
        n.jsxs)("div", {
            className: "flex flex-row space-x-2 items-center",
            children: [(0,
            n.jsxs)("div", {
                className: "relative mr-2",
                children: [e.v0, (0,
                n.jsx)("div", {
                    className: "absolute bottom-0 right-0 transform translate-x-1 translate-y-1",
                    children: (0,
                    n.jsxs)("span", {
                        className: "relative flex h-4 w-4",
                        children: [(0,
                        n.jsx)("span", {
                            className: e.v1
                        }), (0,
                        n.jsx)("span", {
                            className: e.v2
                        })]
                    })
                })]
            }), (0,
            n.jsxs)("div", {
                className: "flex flex-col space-y-1",
                children: [(0,
                n.jsx)("p", {
                    className: "text-foreground",
                    children: e.v3
                }), (0,
                n.jsx)("div", {
                    className: "flex flex-row space-x-1 items-center",
                    children: e.v4
                })]
            })]
        }), {
            name: "Lanyard_1",
            portals: ["v0", "v3", "v4"]
        })
          , u = function() {
            var e, t, r, s;
            let[a,i] = (0,
            o.useState)(void 0)
              , {loading: u, status: m} = (0,
            l.useLanyard)({
                userId: "492731761680187403",
                socket: !0
            });
            return ((0,
            o.useEffect)(()=>{
                m && i(m.activities.find(e=>4 !== e.type))
            }
            , [m]),
            u || !m) ? null : (0,
            n.jsx)(c, {
                v0: (0,
                n.jsx)(d.default, {
                    src: "https://cdn.discordapp.com/avatars/".concat(m.discord_user.id, "/").concat(m.discord_user.avatar),
                    alt: "discord avatar",
                    width: 64,
                    height: 64,
                    className: "rounded-lg"
                }),
                v1: "animate-ping transition-all absolute inline-flex h-full w-full rounded-full ".concat(x[m.discord_status]),
                v2: "relative inline-flex rounded-full h-4 w-4 ".concat(x[m.discord_status]),
                v3: m.discord_user.username,
                v4: a ? (0,
                n.jsx)("p", {
                    className: "text-muted-foreground text-sm",
                    children: 2 === a.type ? (0,
                    n.jsxs)("span", {
                        children: ["Listening to", (null === (e = m.spotify) || void 0 === e ? void 0 : e.song.length) + (null === (t = m.spotify) || void 0 === t ? void 0 : t.artist.length) < 30 ? (0,
                        n.jsxs)("span", {
                            children: [" ", null === (r = m.spotify) || void 0 === r ? void 0 : r.song, " by", " ", null === (s = m.spotify) || void 0 === s ? void 0 : s.artist]
                        }) : (0,
                        n.jsx)("span", {
                            children: " Spotify"
                        })]
                    }) : (0,
                    n.jsxs)("span", {
                        children: ["Playing ", a.name]
                    })
                }) : (0,
                n.jsxs)("p", {
                    className: "text-muted-foreground text-sm",
                    children: [f[m.discord_status], " on Discord"]
                })
            })
        }
          , f = {
            online: "Online",
            dnd: "Do Not Disturb",
            idle: "Idle",
            offline: "Offline"
        }
          , x = {
            online: "bg-green-500",
            dnd: "bg-red-500",
            idle: "bg-yellow-500",
            offline: "bg-neutral-400"
        };
        function m() {
            return (0,
            n.jsx)(o.Suspense, {
                fallback: (0,
                n.jsx)(i, {
                    className: "h-[84px] w-[300px] rounded-md"
                }),
                children: (0,
                n.jsx)(u, {})
            })
        }
    },
    9590: function(e, t, r) {
        "use strict";
        r.d(t, {
            Drawer: function() {
                return l
            },
            DrawerContent: function() {
                return u
            },
            DrawerDescription: function() {
                return p
            },
            DrawerFooter: function() {
                return x
            },
            DrawerHeader: function() {
                return f
            },
            DrawerTitle: function() {
                return m
            },
            DrawerTrigger: function() {
                return d
            }
        });
        var n = r(568)
          , s = r(838)
          , a = r(286)
          , i = r(532);
        let l = e=>{
            let {shouldScaleBackground: t=!0, ...r} = e;
            return (0,
            n.jsx)(a.d.Root, {
                shouldScaleBackground: t,
                ...r
            })
        }
        ;
        l.displayName = "Drawer";
        let d = a.d.Trigger
          , o = a.d.Portal;
        a.d.Close;
        let c = s.forwardRef((e,t)=>{
            let {className: r, ...s} = e;
            return (0,
            n.jsx)(a.d.Overlay, {
                ref: t,
                className: (0,
                i.cn)("fixed inset-0 z-50 bg-black/80", r),
                ...s
            })
        }
        );
        c.displayName = a.d.Overlay.displayName;
        let u = s.forwardRef((e,t)=>{
            let {className: r, children: s, ...l} = e;
            return (0,
            n.jsxs)(o, {
                children: [(0,
                n.jsx)(c, {}), (0,
                n.jsxs)(a.d.Content, {
                    ref: t,
                    className: (0,
                    i.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", r),
                    ...l,
                    children: [(0,
                    n.jsx)("div", {
                        className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
                    }), s]
                })]
            })
        }
        );
        u.displayName = "DrawerContent";
        let f = e=>{
            let {className: t, ...r} = e;
            return (0,
            n.jsx)("div", {
                className: (0,
                i.cn)("grid gap-1.5 p-4 text-center sm:text-left", t),
                ...r
            })
        }
        ;
        f.displayName = "DrawerHeader";
        let x = e=>{
            let {className: t, ...r} = e;
            return (0,
            n.jsx)("div", {
                className: (0,
                i.cn)("mt-auto flex flex-col gap-2 p-4", t),
                ...r
            })
        }
        ;
        x.displayName = "DrawerFooter";
        let m = s.forwardRef((e,t)=>{
            let {className: r, ...s} = e;
            return (0,
            n.jsx)(a.d.Title, {
                ref: t,
                className: (0,
                i.cn)("text-lg font-semibold leading-none tracking-tight", r),
                ...s
            })
        }
        );
        m.displayName = a.d.Title.displayName;
        let p = s.forwardRef((e,t)=>{
            let {className: r, ...s} = e;
            return (0,
            n.jsx)(a.d.Description, {
                ref: t,
                className: (0,
                i.cn)("text-sm text-muted-foreground", r),
                ...s
            })
        }
        );
        p.displayName = a.d.Description.displayName
    },
    532: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return a
            }
        });
        var n = r(5821)
          , s = r(6442);
        function a() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            s.m6)((0,
            n.W)(t))
        }
    }
}, function(e) {
    e.O(0, [602, 261, 62, 415, 534, 548, 744], function() {
        return e(e.s = 8025)
    }),
    _N_E = e.O()
}
]);
