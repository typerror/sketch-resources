var that=this;function __skpm_run(e,t){that.context=t;var r=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Error={unsupportedSymbol:{message:"This does not seem to be a supported symbol."},unsupportedShapePath:{message:"There seems to be an issue with the shape we are trying to apply."},emptySelection:{message:"Please, select a Shape, Angle Mockup or Angle Composition"},unsupportedElement:{message:"Please, select a Shape, Angle Mockup or Angle Composition"},noImageOverrideOnSymbol:{message:"There is no image override for the selected symbol"},symbolWithBitMapLayer:{message:"Bitmat overrides are not supported"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2);function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var o={linear:0,quadratic:1,cubic:2};Array.prototype.rotated=function(e){return this.slice(e,this.length).concat(this.slice(0,e))};var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.context=t.context,this.selectedLayer=t.selectedLayer}return n(e,[{key:"imprintValue_forKey",value:function(){return function(e,t){null!=this.selectedLayer?this.context.command.setValue_forKey_onLayer(e,t,this.selectedLayer):print("🛑 Imprinting value before selected layer assignment")}}()},{key:"loadValueForKey",value:function(){return function(e){return null==this.selectedLayer?(print("🛑 Loading value before selected layer assignment"),null):this.context.command.valueForKey_onLayer(e,this.selectedLayer)}}()},{key:"artboardID",get:function(){return function(){return void 0!=this._artboardID?this._artboardID:(this._artboardID=this.loadValueForKey("artboard-id")+"",this._artboardID)}}(),set:function(){return function(e){}}()},{key:"artboard",get:function(){return function(){if(void 0!=this._artboard)return this._artboard;if(void 0!=this.artboardID){for(var e=this.context.document.artboards(),t=0;t<e.count();t++)e[t].objectID()==this.artboardID&&(this._artboard=e[t]);if(void 0!=this._artboard)return this._artboard;print("🛑 Not able to retrieve artboard from id in document")}else print("🛑 No artboard ID registered")}}(),set:function(){return function(e){this._artboard=e,this.imprintValue_forKey(e.objectID(),"artboard-id")}}()},{key:"rotation",get:function(){return function(){return void 0==this._rotation&&(this._rotation=this.loadValueForKey("rotation")),this._rotation}}(),set:function(){return function(e){this._rotation=e,this.imprintValue_forKey(e,"rotation")}}()},{key:"pixelDensity",get:function(){return function(){if(void 0==this._pixelDensity&&(this._pixelDensity=this.loadValueForKey("pixel-density")+0),0==this._pixelDensity){var e=Math.round(2*this.estimatePixelDensity()+.5);return 0==e?1:e}return this._pixelDensity}}(),set:function(){return function(e){this._pixelDensity=e,this.imprintValue_forKey(e,"pixel-density")}}()},{key:"compressionRatio",get:function(){return function(){return void 0==this._compressionRatio&&(this._compressionRatio=this.loadValueForKey("compression-ratio")+0),this._compressionRatio}}(),set:function(){return function(e){this._compressionRatio=e,this.imprintValue_forKey(e,"compression-ratio")}}()},{key:"reversed",get:function(){return function(){return void 0==this._reversed&&(this._reversed=1==this.loadValueForKey("reversed")),this._reversed}}(),set:function(){return function(e){this._reversed=e,this.imprintValue_forKey(e,"reversed")}}()}]),n(e,[{key:"exportRequest_lessThan52",value:function(){return function(){var e=MSImmutableLayerAncestry.alloc().initWithMSLayer(this.artboard),t=MSExportFormat.formatWithScale_name_fileFormat(this.pixelDensity,"Angle","png");return MSExportRequest.exportRequestsFromLayerAncestry_exportFormats(e,[t]).firstObject()}}()},{key:"exporter",value:function(){return function(){var e=this.context.document.colorSpace();if(MSApplicationMetadata.metadata().appVersion<52)return MSExporter.exporterForRequest_colorSpace(this.exportRequest_lessThan52(),e);var t=MSExportFormat.alloc().init();t.fileFormat="png",t.scale=this.pixelDensity;var r=MSExportRequest.exportRequestsFromExportableLayer_exportFormats_useIDForName(this.artboard,[t],!0).firstObject();return MSExporter.exporterForRequest_colorSpace(r,e)}}()},{key:"ciImage",value:function(){return function(){var e=this.exporter().bitmapImageRep();return CIImage.alloc().initWithCGImage(e.CGImage())}}()},{key:"guessRotationAndReversion",value:function(){return function(){if(1===this.loadValueForKey("guessed-rotation"))print("⚠️ Angle has already guessed rotation and symmetry for this shape");else{var e=this.verticesLengths,t=void 0;if(this.artboard.class()!=MSSymbolMaster){t=this.artboard.frame();var r=e[0]>e[1],n=t.width()>t.height();r&&(print("🛑 HORIZONTAL"),this.rotate()),n&&(print("🛑 HAS HORIZONTAL ARTBOARD"),this.rotate());var a=this.pointsFromBezierPath,o=Math.min.apply(Math,i(a.map(function(e){return e.y}))),s=a[this.mappedIndexFor(0)],u=a[this.mappedIndexFor(1)];s.y!=o&&u.y!=o&&(print("🛑 UPSIDE DOWN"),this.rotate(),this.rotate());var c=MSApplicationMetadata.metadata().appVersion;if(c<50||c>=52){var l=this.shorlaceSum();l<0?(print("🛑 COUNTERCLOCKWISE"),this.reverseSymmetry()):l>0?print("🛑 CLOCKWISE"):print("🛑 UNDEFINED CHIRALITY")}else c<52&&(1===this.targetPath.contours().firstObject().isClockwise()?(this.reverseSymmetry(),print("🛑 CLOCKWISE")):print("🛑 COUNTERCLOCKWISE"),print("🛑 UNDEFINED CHIRALITY"));print("🔄↔️ Angle has just guessed rotation and symmetry for this shape"),this.imprintValue_forKey(!0,"guessed-rotation")}}}}()},{key:"shorlaceSum",value:function(){return function(){var e=this.pointsFromBezierPath,t=Math.max.apply(Math,i(e.map(function(e){return e.y})));return Array.from({length:4},function(e,t){return t}).reduce(function(r,n){return r+(-e[n].x+e[(n+1)%4].x)*(2*t-e[n].y-e[(n+1)%4].y)},0)}}()},{key:"maximumVerticesWidthAndHeight",value:function(){return function(){var e=this.verticesLengths.rotated(this.rotation%2);return[Math.max(e[0],e[2]),Math.max(e[1],e[3])]}}()},{key:"rotate",value:function(){return function(){this.rotation=(this.rotation+(this.reversed?1:3))%4}}()},{key:"reverseSymmetry",value:function(){return function(){this.rotate(),this.reversed=!this.reversed}}()},{key:"mappedIndexFor",value:function(){return function(e){return this.reversed?[0,3,2,1][(e+this.rotation)%4]:(e+this.rotation)%4}}()},{key:"lossyCompressionOfImage_atRate",value:function(){return function(e,t){var r=NSBitmapImageRep.alloc().initWithCIImage(e),n=NSMutableDictionary.dictionary();n.setObject_forKey(NSTIFFCompressionJPEG,NSImageCompressionMethod),n.setObject_forKey(t,NSImageCompressionFactor),n.setObject_forKey(NSColor.whiteColor(),NSImageFallbackBackgroundColor);var a=r.representationUsingType_properties(NSJPEGFileType,n);return NSImage.alloc().initWithData(a)}}()},{key:"pixelAccurateRepresentationOfImage",value:function(){return function(e){var t=NSCIImageRep.alloc().initWithCIImage(e),r=NSImage.alloc().initWithSize(t.size());return r.addRepresentation(t),r}}()},{key:"pointsAreValid_lessThan50",get:function(){return function(){var e=this.pointsFromBezierPath;return null!==e&&7===e.length}}()},{key:"pointsAreValid_lessThan52",get:function(){return function(){var e=this.targetPath.contours().firstObject(),t=Array.fromNSArray(e.segments());return null!==t&&4===t.length&&!t.some(function(e){return e.segmentType()!=o.linear})}}()},{key:"pointsAreValid",get:function(){return function(){var e=MSApplicationMetadata.metadata().appVersion;if(e<50)return this.pointsAreValid_lessThan50;if(e<52)return this.pointsAreValid_lessThan52;var t=this.targetLayer.points();return null!==t&&4===t.length&&!t.some(function(e){return!e.isStraight()})}}()},{key:"pointsFromBezierPath",get:function(){return function(){var e=this,t=MSApplicationMetadata.metadata().appVersion;if(t<50){var r=this.targetPath.elementCount();return 7!=r?null:Array.from({length:r},function(e,t){return t}).map(function(t){var r=MOPointer.alloc().initWithValue_(CGPointMake(0,0));return e.targetPath.elementAtIndex_associatedPoints_(t,r),r.value()})}if(t<52){var n=this.targetPath.contours().firstObject();return Array.fromNSArray(n.segments()).map(function(e){return e.endPoint1()})}var a=this.targetLayer.rect().size;return Array.fromNSArray(this.targetLayer.points()).map(function(e){return e.point()}).map(function(e){return{x:Number(e.x)*Number(a.width),y:Number(e.y)*Number(a.height)}})}}()},{key:"verticesLengths",get:function(){return function(){var e=this.pointsFromBezierPath;return Array.from({length:4},function(e,t){return t}).map(function(t){var r=(t+1)%4,n=e[t].x-e[r].x,a=e[t].y-e[r].y;return Math.sqrt(Math.pow(n,2)+Math.pow(a,2))})}}()},{key:"normalizedCIVectors",get:function(){return function(){var e=this.pointsFromBezierPath,t=Math.max.apply(Math,i(e.map(function(e){return e.y}))),r=this.pixelDensity;return e.map(function(e){return CIVector.vectorWithX_Y(e.x*r,(t-e.y)*r)})}}()},{key:"transformedImage",get:function(){return function(){var e=this.normalizedCIVectors,t=CIFilter.filterWithName("CIPerspectiveTransform");t.setValue_forKey(e[this.mappedIndexFor(0)],"inputTopLeft"),t.setValue_forKey(e[this.mappedIndexFor(1)],"inputTopRight"),t.setValue_forKey(e[this.mappedIndexFor(2)],"inputBottomRight"),t.setValue_forKey(e[this.mappedIndexFor(3)],"inputBottomLeft");var r=this.ciImage();t.setValue_forKey(r,"inputImage");var n=t.valueForKey("outputImage");if(n){var i=void 0,o=a.CompressionRatio[this.compressionRatio].ratio;return i=1!=o?this.lossyCompressionOfImage_atRate(n,o):this.pixelAccurateRepresentationOfImage(n),MSApplicationMetadata.metadata().appVersion<47?MSImageData.alloc().initWithImage_convertColorSpace(i,!0):MSImageData.alloc().initWithImage_(i)}print("🛑 Unable to form perspective image")}}()}]),e}();t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CompressionRatio=[{selectionLabel:"Best",ratio:1},{selectionLabel:"Better",ratio:.9},{selectionLabel:"Good",ratio:.8},{selectionLabel:"Average",ratio:.7}]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),o=r(0);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(r.targetLayer=e.override.affectedLayer(),r.targetLayer.class()===MSImmutableBitmapLayer)return s(r,o.Error.symbolWithBitMapLayer);var n=MSApplicationMetadata.metadata().appVersion;n<50?r.targetPath=e.override.affectedLayer().bezierPath():n<52&&(r.targetPath=e.override.affectedLayer().pathInFrameWithTransforms());var a=e.override.overridePoint().parent();return null!==a&&(r.overrideLayer=a),r.pointsAreValid?r:s(r,o.Error.unsupportedShapePath)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"]),a(t,[{key:"applyImage",value:function(){return function(){var e=this.targetLayer.objectID(),t=this.selectedLayer.overrides()||NSDictionary.dictionary(),r=NSMutableDictionary.dictionaryWithDictionary(t);r.setObject_forKey(this.transformedImage,e),this.selectedLayer.overrides=r}}()},{key:"estimatePixelDensity",value:function(){return function(){var e=this.maximumVerticesWidthAndHeight(),t=n(e,2),r=t[0],a=t[1],i=this.selectedLayer.rect().size.width*r/(this.selectedLayer.naturalSize().width*this.artboard.rect().size.width),o=this.selectedLayer.rect().size.height*a/(this.selectedLayer.naturalSize().height*this.artboard.rect().size.height);return i>o?i:o}}()},{key:"description",value:function(){return function(){return this.selectedLayer.name()+" "+this.targetLayer.name()}}()}]),t}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSelectionAndOptions_forAngleInstances=u,t.default=function(e){var t=e.document,r=e.selection,o=c(e.scriptPath,"Contents/Resources/logo.png");if(null!=r){var s=Array.fromNSArray(r);if(0!=s.length){var l=s[0].parentArtboard(),f=Array.fromNSArray(t.artboards()).filter(function(e){return e!=l}).sort(a.compareByRatioAndAlphabet),p=Array.fromNSArray(t.pages()).filter(function(e){return e!=t.currentPage()}).map(function(e){return e.artboards()}).map(function(e){return Array.fromNSArray(e)}).reduce(function(e,t){return e.concat(t)},new Array).filter(a.filterPossibleArtboards).sort(a.compareByRatioAndAlphabet);if(f.length+p.length==0){var d=NSAlert.alloc().init();return d.setMessageText("Angle needs an Artboard"),d.setInformativeText("To start using Angle, create a new Artboard that contains your screen."),d.addButtonWithTitle("OK"),d.icon=o,void d.runModal()}var h=n.default.tryCreating({for:s,in:e}),y=h.filter(function(e){return e instanceof n.default}),m=h.filter(function(e){return!(e instanceof n.default)});if(0==y.length)0==m.length?a.show({message:i.Error.unsupportedElement.message,inDocument:t}):a.show({message:m[0].message,inDocument:t});else(function(e){var t=e.angles,r=e.artboardsOnSelectPage,n=e.context,a=e.artboardsOnOtherPages;if(1===r.length)t.forEach(function(e){e.artboard=r[0],e.pixelDensity=0,e.selectedCompressionRatio=0});else{var i=c(n.scriptPath,"Contents/Resources/logo.png"),o=u({artboards:r,otherArtboards:a,angles:t,alertImage:i});if(o.alertOption!=NSAlertFirstButtonReturn)return!1;t.forEach(function(e,t,n){var i=o.artboardSelections[t].indexOfSelectedItem(),s=r.concat(a);e.artboard=s[i],e.pixelDensity=o.densitySelections[t].indexOfSelectedItem(),e.compressionRatio=o.compressionSelections[t].indexOfSelectedItem()})}return t.forEach(function(e){e.guessRotationAndReversion(),e.applyImage()}),!0})({angles:y,artboardsOnSelectPage:f,artboardsOnOtherPages:p,context:e})&&a.show({message:"You got Angled! 📱",inDocument:t})}else a.show({message:i.Error.emptySelection.message,inDocument:t})}else a.show({message:i.Error.emptySelection.message,inDocument:t})};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(5)),i=r(0),o=r(8),s=r(2);function u(e){var t=e.artboards,r=e.otherArtboards,n=e.alertImage,i=e.angles,u=Array.from({length:i.length},function(e,t){return t});if(1==t.length)return{alertOption:NSAlertFirstButtonReturn,artboardSelections:u.map(function(e,t,r){}),densitySelections:u.map(function(e,t,r){}),compressionSelections:u.map(function(e,t,r){})};var c=NSAlert.alloc().init(),l=NSView.alloc().init();c.setMessageText("Apply Mockup"),c.setInformativeText("Choose an Artboard to apply into the selected shape."),c.addButtonWithTitle("Apply"),c.addButtonWithTitle("Cancel"),c.icon=n;var f,p;p=NSMakeRect(0,0,260,16);var d=a.createLabel("Artboard",12,p);l.addSubview(d),p=NSMakeRect(260,0,90,16);var h=a.createLabel("Pixel Density",12,p);l.addSubview(h),p=NSMakeRect(350,0,90,16);var y=a.createLabel("Quality",12,p);l.addSubview(y);var m=u.length>1?50:28;u.length>1&&u.map(function(e,t,r){var n=NSMakeRect(0,20+m*t,260,16);return a.createLabel(i[t].description(),12,n)}).forEach(function(e){return l.addSubview(e)});var v=t.concat(r),g=v.map(function(e){if(void 0!=e.name)return e.name instanceof String?e.name:e.name()}).map(function(e,t,r){var n=r.map(function(t,r,n){return e==t?r:-1}).filter(function(e,t,r){return-1!=e});if(n.length>1){var a=n.indexOf(t);return e+" ".repeat(a)}return e}),b=v.map(function(e){return a.smallImagesFromArtboard(e)}),S=u.map(function(e,t,r){return a.popUpButtonsforRectangleIndexer_withTitleIndexer_andImageIndexer_defaultSelected_onIndex(function(e){return NSMakeRect(0,20+m*e+16,260,28)},g,b,t)});S.forEach(function(e){return l.addSubview(e)});var _=o.PixelDensity.map(function(e){return e.selectionLabel}),I=u.map(function(e,t,r){return a.popUpButtonsforRectangleIndexer_withTitleIndexer_andImageIndexer_defaultSelected_onIndex(function(e){return NSMakeRect(260,20+m*e+16,90,28)},_,null,t)});I.forEach(function(e){return l.addSubview(e)});var x=s.CompressionRatio.map(function(e){return e.selectionLabel}),A=u.map(function(e,t,r){return a.popUpButtonsforRectangleIndexer_withTitleIndexer_andImageIndexer_defaultSelected_onIndex(function(e){return NSMakeRect(350,20+m*e+16,90,28)},x,null,t)});return A.forEach(function(e){return l.addSubview(e)}),f=20+m*i.length+28,l.frame=NSMakeRect(0,0,440,f),l.setFlipped(!0),c.accessoryView=l,{alertOption:c.runModal(),artboardSelections:S,densitySelections:I,compressionSelections:A}}function c(e,t){var r=e.stringByDeletingLastPathComponent().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent();return NSImage.alloc().initWithContentsOfFile(r+"/"+t)}String.prototype.repeat=function(e){return new Array(e+1).join(void 0)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.show=function(e){var t=e.message,r=e.inDocument;void 0!=r&&void 0!=r.showMessage&&r.showMessage(t);print(t)},t.filterPossibleArtboards=function(e){var t=e.class();switch(t){case MSArtboardGroup:var r=e,n=r.frame();if(n.width()<250||n.height()<250)return!1;var a=n.width()/n.height();if(a>1&&(a=1/a),a<.4)return!1;break;case MSSymbolMaster:return!1;default:return print(t),!1}return!0},t.compareByRatioAndAlphabet=function(e,t){var r=e.frame(),n=t.frame(),a=r.width()/r.height();a>1&&(a=1/a);var i=a>.4&&a<.8,o=n.width()/n.height();o>1&&(o=1/o);var s=o>.4&&o<.8;if(i&&!s)return!1;if(s&&!i)return!0;if(a==o)return e.name()>t.name();return a>o},t.introspect=function(e){var t=e.class().mocha();print("-----------------------------------------------"),print("PROPERTIES-------------------------------------"),print("-----------------------------------------------"),print(t.properties()),print(t.propertiesWithAncestors()),print("-----------------------------------------------"),print("INSTANCE METHODS-------------------------------"),print("-----------------------------------------------"),print(t.instanceMethods()),print(t.instanceMethodsWithAncestors()),print("-----------------------------------------------"),print("CLASS METHODS----------------------------------"),print("-----------------------------------------------"),print(t.classMethods()),print(t.classMethodsWithAncestors()),print("-----------------------------------------------"),print("PROTOCOLS--------------------------------------"),print("-----------------------------------------------"),print(t.protocols()),print(t.protocolsWithAncestors())},t.createLabel=function(e,t,r){var n=NSTextField.alloc().initWithFrame(r);return n.setStringValue(e),n.setFont(NSFont.boldSystemFontOfSize(t)),n.setBezeled(!1),n.setDrawsBackground(!1),n.setEditable(!1),n.setSelectable(!1),n},t.popUpButtonsforRectangleIndexer_withTitleIndexer_andImageIndexer_defaultSelected_onIndex=function(e,t,r,n){var a=NSPopUpButton.alloc().initWithFrame(e(n));a.addItemsWithTitles(t),null!=r&&(a.imageScaling=NSImageScaleProportionallyUpOrDown,Array.fromNSArray(a.itemArray()).forEach(function(e,t,n){e.image=r[t]}));return a},t.smallImagesFromArtboard=function(e){if(e.class()==MSSymbolMaster)return print(e),null;void 0==e.frame&&print(e);var t=e.frame().width(),r=e.frame().height(),n=t/r;n>1&&(n=1/n);if(n>.8||n<.4)return null;var a=MSImmutableLayerAncestry.alloc().initWithMSLayer(e),i=48/(t>r?t:r),o=MSExportFormat.formatWithScale_name_fileFormat(i,"","png"),s=MSExportRequest.exportRequestsFromLayerAncestry_exportFormats(a,[o]).firstObject();return MSExporter.exporterForRequest_colorSpace(s,NSColorSpace.sRGBColorSpace()).previewImage()};var n=u(r(1)),a=u(r(6)),i=u(r(3)),o=u(r(7)),s=r(0);function u(e){return e&&e.__esModule?e:{default:e}}n.default.tryCreating=function(e){var t=e.for,r=e.in;return t.map(function(e){switch(e.class()){case MSSymbolInstance:var t=Array.fromNSArray(e.availableOverrides())||[],n=t.filter(function(e){return e.currentValue().class()==MSImageData}).map(function(t){return new i.default({selectedLayer:e,context:r,override:t})}),u=t.map(function(e){return e.children()}).filter(function(e){return null!=e}).map(Array.fromNSArray).reduce(function(e,t){return e.concat(t)},[]).filter(function(e){return e.class()==MSAvailableOverride}).map(function(t){return new a.default({override:t,selectedLayer:e,context:r})});return n.concat(u);case MSShapeGroup:case MSShapePathLayer:case MSRectangleShape:return new o.default({selectedLayer:e,context:r});default:return s.Error.unsupportedElement}}).reduce(function(e,t,r,n){return e.concat(t)},[])},Array.fromNSArray=function(e){for(var t=[],r=0;r<e.count();r++)t.push(e[r]);return t},Array.prototype.print=function(){return this.map(function(e){return print(e),e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){return function e(t,r,n){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(r(3));r(0);var o=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.override=e.override,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"]),n(t,[{key:"loadValueForKey",value:function(){return function(e){return a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"loadValueForKey",this).call(this,this.targetLayer.objectID()+"-"+e)}}()},{key:"imprintValue_forKey",value:function(){return function(e,r){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"imprintValue_forKey",this).call(this,e,this.targetLayer.objectID()+"-"+r)}}()},{key:"applyImage",value:function(){return function(){var e=this.selectedLayer.overrides()||NSDictionary.dictionary(),t=NSMutableDictionary.dictionaryWithDictionary(e),r=(this.overrideLayer+"").replace("_symbolID",""),n=t.objectForKey(r)||NSMutableDictionary.dictionary(),a=NSMutableDictionary.dictionaryWithDictionary(n),i=this.targetLayer.objectID();a.setObject_forKey(this.transformedImage,i),t.setObject_forKey(a,r),this.selectedLayer.overrides=t}}()},{key:"description",value:function(){return function(){return this.override.parent().affectedLayer().name()+" "+this.targetLayer.name()}}()}]),t}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),o=r(0);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u={solid:0,gradient:1,pattern:4,noise:5},c=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.targetLayer=r.selectedLayer;var n=MSApplicationMetadata.metadata().appVersion;return n<50?r.targetPath=r.selectedLayer.bezierPath():n<52&&(r.targetPath=r.selectedLayer.pathInFrameWithTransforms()),r.pointsAreValid?r:s(r,o.Error.unsupportedShapePath)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"]),a(t,[{key:"applyImage",value:function(){return function(){var e=MSStyleFill.alloc().init();e.setImage(this.transformedImage),e.fillType=u.pattern,this.targetLayer.style().removeAllStyleFills(),this.targetLayer.style().addStyleFill(e)}}()},{key:"estimatePixelDensity",value:function(){return function(){var e=this.maximumVerticesWidthAndHeight(),t=n(e,2),r=t[0],a=t[1],i=r/this.artboard.rect().size.width,o=a/this.artboard.rect().size.height;return i>o?i:o}}()},{key:"description",value:function(){return function(){return this.targetLayer.name()}}()}]),t}();t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PixelDensity=[{title:"Auto",selectionLabel:"Auto"},{title:"1x",selectionLabel:"1x"},{title:"2x",selectionLabel:"2x"},{title:"3x",selectionLabel:"3x"},{title:"4x",selectionLabel:"4x"}]}]);"default"===e&&"function"==typeof r?r(t):r[e](t)}that.onRun=__skpm_run.bind(this,"default");