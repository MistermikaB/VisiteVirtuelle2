(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"watermark":false,"gap":10,"class":"Player","start":"this.init()","scrollBarMargin":2,"id":"rootPlayer","minHeight":0,"data":{"textToSpeechConfig":{"pitch":1,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false},"displayTooltipInTouchScreens":true,"history":{},"locales":{"fr":"locale/fr.txt"},"name":"Player704","defaultLocale":"fr"},"minWidth":0,"propagateClick":false,"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","children":["this.MainViewer"],"backgroundColorRatios":[0],"scripts":{"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"clone":TDV.Tour.Script.clone,"setLocale":TDV.Tour.Script.setLocale,"startMeasurement":TDV.Tour.Script.startMeasurement,"executeJS":TDV.Tour.Script.executeJS,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizStart":TDV.Tour.Script.quizStart,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"existsKey":TDV.Tour.Script.existsKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizFinish":TDV.Tour.Script.quizFinish,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getOverlays":TDV.Tour.Script.getOverlays,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPixels":TDV.Tour.Script.getPixels,"registerKey":TDV.Tour.Script.registerKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"toggleVR":TDV.Tour.Script.toggleVR,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"disableVR":TDV.Tour.Script.disableVR,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupImage":TDV.Tour.Script.showPopupImage,"historyGoBack":TDV.Tour.Script.historyGoBack,"setValue":TDV.Tour.Script.setValue,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"enableVR":TDV.Tour.Script.enableVR,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"init":TDV.Tour.Script.init,"setMapLocation":TDV.Tour.Script.setMapLocation,"playAudioList":TDV.Tour.Script.playAudioList,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getKey":TDV.Tour.Script.getKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"isPanorama":TDV.Tour.Script.isPanorama,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"translate":TDV.Tour.Script.translate,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"createTween":TDV.Tour.Script.createTween,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowScore":TDV.Tour.Script.quizShowScore},"hash": "422d2267b9b99a33337fb7030e38abbc028ed63eae17c802b7843d8e6f725672", "definitions": [{"height":"100%","playbackBarProgressBorderSize":0,"progressBottom":10,"playbackBarRight":0,"minHeight":50,"playbackBarProgressBorderRadius":0,"data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","minWidth":100,"propagateClick":false,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600","progressLeft":"33%","progressHeight":2,"progressBorderSize":0,"subtitlesBottom":50,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"toolTipPaddingTop":4,"progressBarBorderRadius":2,"playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"playbackBarBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"toolTipFontFamily":"Arial","subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"playbackBarLeft":0,"progressBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","progressRight":"33%","playbackBarBorderSize":0,"toolTipFontColor":"#606060","subtitlesTextShadowVerticalLength":1,"progressOpacity":0.7,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"class":"ViewerArea","subtitlesGap":0,"subtitlesTop":0,"playbackBarHeadShadow":true,"id":"MainViewer","toolTipBorderColor":"#767676","subtitlesTextShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundOpacity":1,"toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"toolTipTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","playbackBarBottom":5,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"toolTipShadowColor":"#333138","playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#000000"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeight":10,"firstTransitionDuration":0,"subtitlesFontSize":"3vmin","toolTipBackgroundColor":"#F6F6F6","progressBorderRadius":2,"width":"100%","subtitlesTextShadowHorizontalLength":1,"subtitlesFontColor":"#FFFFFF","playbackBarHeadWidth":6},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_7C0439CD_76F7_A587_41B0_04F0A0FEC4A6","class":"PanoramaCamera","id":"panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1_camera","enterPointingToHorizon":true},{"id":"mainPlayList","items":[{"camera":"this.panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1_camera","media":"this.panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem"},{"camera":"this.panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB_camera","media":"this.panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"frames":[{"thumbnailUrl":"media/panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB_t.jpg","cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB_0/{face}/0/{row}_{column}.jpg","colCount":30,"tags":"ondemand","rowCount":5,"class":"TiledImageResourceLevel","height":2560},{"width":9216,"url":"media/panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB_0/{face}/1/{row}_{column}.jpg","colCount":18,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","height":1536},{"width":6144,"url":"media/panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB_0/{face}/2/{row}_{column}.jpg","colCount":12,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","height":1024},{"width":3072,"url":"media/panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB_0/{face}/3/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","height":512}]},"class":"CubicPanoramaFrame"}],"label":trans('panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB.label'),"class":"Panorama","hfov":360,"hfovMax":130,"thumbnailUrl":"media/panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB_t.jpg","id":"panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB","data":{"label":"ENTREE"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_79D56A6B_76FA_A68C_41D5_E28E68240985"},"yaw":7.04,"backwardYaw":7.04,"distance":100,"select":"this.overlay_79D56A6B_76FA_A68C_41D5_E28E68240985.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1","class":"AdjacentPanorama"}],"hfovMin":"120%","overlays":["this.overlay_79D56A6B_76FA_A68C_41D5_E28E68240985"],"vfov":180},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","arrowKeysAction":"translate","displayPlaybackBar":true,"aaEnabled":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_7C01D9D1_76F7_A59F_41A9_D270AC9FEFC4","class":"PanoramaCamera","id":"panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB_camera","enterPointingToHorizon":true},{"frames":[{"thumbnailUrl":"media/panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1_t.jpg","cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1_0/{face}/0/{row}_{column}.jpg","colCount":30,"tags":"ondemand","rowCount":5,"class":"TiledImageResourceLevel","height":2560},{"width":9216,"url":"media/panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1_0/{face}/1/{row}_{column}.jpg","colCount":18,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","height":1536},{"width":6144,"url":"media/panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1_0/{face}/2/{row}_{column}.jpg","colCount":12,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","height":1024},{"width":3072,"url":"media/panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1_0/{face}/3/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","height":512}]},"class":"CubicPanoramaFrame"}],"label":trans('panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1.label'),"class":"Panorama","hfov":360,"hfovMax":130,"thumbnailUrl":"media/panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1_t.jpg","id":"panorama_7A97567F_76F7_EE83_41AE_F4F96AF0DCE1","data":{"label":"_FLOW_360_"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_7B3FDF99_76F9_FD8F_41CD_91916C42DAE0"},"yaw":7.04,"backwardYaw":7.04,"distance":100,"select":"this.overlay_7B3FDF99_76F9_FD8F_41CD_91916C42DAE0.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_7C297C46_76F7_E285_41DC_794C01C1A3AB","class":"AdjacentPanorama"}],"hfovMin":"120%","overlays":["this.overlay_7B3FDF99_76F9_FD8F_41CD_91916C42DAE0"],"vfov":180},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"id":"sequence_7C0439CD_76F7_A587_41B0_04F0A0FEC4A6","class":"PanoramaCameraSequence"},{"data":{"label":"Arrow 01","hasPanoramaAction":true},"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-0.76,"yaw":7.04,"distance":100,"image":"this.AnimatedImageResource_66252D1E_7709_6284_41D0_86378D680AA1","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","hfov":4.75,"vfov":4.2,"data":{"label":"Arrow 01"}}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_79D67A72_76FA_A69C_41BF_539423951442"],"id":"overlay_79D56A6B_76FA_A68C_41D5_E28E68240985","maps":[]},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"id":"sequence_7C01D9D1_76F7_A59F_41A9_D270AC9FEFC4","class":"PanoramaCameraSequence"},{"data":{"label":"Arrow 01","hasPanoramaAction":true},"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-0.76,"yaw":7.04,"distance":100,"image":"this.AnimatedImageResource_66251D1D_7709_6284_41C6_08E47D92DE1C","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","hfov":4.75,"vfov":4.2,"data":{"label":"Arrow 01"}}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_78E4FFEB_76F9_FD83_41D7_E02F7EB575B4"],"id":"overlay_7B3FDF99_76F9_FD8F_41CD_91916C42DAE0","maps":[]},{"finalFrame":"first","colCount":3,"rowCount":3,"class":"AnimatedImageResource","frameDuration":62,"frameCount":9,"id":"AnimatedImageResource_66252D1E_7709_6284_41D0_86378D680AA1","levels":[{"width":300,"url":"media/res_677E2B6C_7709_A684_41D4_1D1177B95619_0.png","class":"ImageResourceLevel","height":270}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_79D67A72_76FA_A69C_41BF_539423951442","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"finalFrame":"first","colCount":3,"rowCount":3,"class":"AnimatedImageResource","frameDuration":62,"frameCount":9,"id":"AnimatedImageResource_66251D1D_7709_6284_41C6_08E47D92DE1C","levels":[{"width":300,"url":"media/res_677E2B6C_7709_A684_41D4_1D1177B95619_0.png","class":"ImageResourceLevel","height":270}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_78E4FFEB_76F9_FD83_41D7_E02F7EB575B4","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","width":"100%","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Fri Nov 29 2024