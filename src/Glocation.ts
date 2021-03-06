import * as dojoDeclare from "dojo/_base/declare";
import * as domConstruct from "dojo/dom-construct";
import * as WidgetBase from "mxui/widget/_WidgetBase";
import * as dojoClass from "dojo/dom-class";
import * as dojoStyle from "dojo/dom-style";
import * as dom from "dojo/dom";
import { GoogleMapsLoader } from "./GoogleMapsLoader";

interface PositionProp {
    coords: Coordinate;
}

interface Coordinate {
    latitude: number;
    longitude: number;
}

class Glocation extends WidgetBase {

          longitudeAttribute: string;
          latitudeAttribute: string;
          cityName: string;
          onChangeMicroflow: string;

         private latitude: number;
         private longitude: number;
         private city: string;
         private locationEntity: string;
         private contextObject: mendix.lib.MxObject;

        postCreate() {
            this.geoSuccess = this.geoSuccess.bind(this);
         }

        update(object: mendix.lib.MxObject, callback?: () => void) {
             this.contextObject = object;
             if (navigator.onLine) {
                 GoogleMapsLoader.load()
                     .then(() => { return; });
             } else {
                 mx.ui.error("Please Check your internet connection");
             }
             this.resetSubscriptions();
             if (callback) {
                 callback();
             }
             this.updateRendering();

         }

        uninitialize(): boolean {
             return true;
         }

        private updateRendering() {
             if (this.contextObject) {
                 this.getLocation();
              } else {
                 dojoStyle.set(this.domNode, "display", "block");
             }
         }

        private resetSubscriptions() {
             this.unsubscribeAll();
             if (this.contextObject) {
                 this.subscribe({
                     callback: (() => {
                     this.updateRendering();
                  }),
                guid: this.contextObject.getGuid()
                 });
             }
         }

        private getLocation() {
             if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
             } else {
                 mx.ui.error("Geolocation is not supported by this browser.");
             }
         }
        private geoError() {
          mx.ui.error("Geocoder failed.");
       }

        private geoSuccess(position: PositionProp) {
             const latitude = position.coords.latitude;
             const longit = position.coords.longitude;
             if ((latitude && longit == null) || longit == null || latitude == null) {
                 alert("Error occured on the coordinates");
             }
             this.geoLocate(latitude, longit);
         }

        private geoLocate(lat: number, lng: number) {
             const geocoder = new google.maps.Geocoder();
             const LatLng = new google.maps.LatLng(lat, lng);
             geocoder.geocode({ location: LatLng }, (results: any, status: any) => {
                 if (status === google.maps.GeocoderStatus.OK) {
                     console.log(results);
                     if (results[1]) {
                         const address = results[0].formatted_address;
                         this.createData(lat, lng, address);
                     } else {
                         mx.ui.error("No results found");
                     }
                 } else {
                    mx.ui.error("Geocoder failed due to: " + status);
                 }
             });
         }

        private executeMicroflow(microflow: string, guid: string, callbck?: (mxobj: mendix.lib.MxObject) => void ) {
             if (microflow && guid) {
                 mx.ui.action(microflow, {
                     callback: (objects: mendix.lib.MxObject) => {
                         if (callbck && typeof callbck === "function") {
                             callbck(objects);
                         }
                     },
                     error: (error) => {
                         alert("Error executing microflow " + microflow + " : " + error.message);
                     },
                     params: {
                         applyto: "selection",
                         guids: [ guid ]
                     }
                 }, this);
             }
         }

        createData(latitude: any, longitude: any, cityN: string ) {
                     this.contextObject.set(this.cityName, cityN);
                     this.contextObject.set(this.latitudeAttribute, latitude);
                     this.contextObject.set(this.longitudeAttribute, longitude);
                     if (cityN == null || latitude == null || longitude == null || (cityN && latitude && longitude) == null) {
                         alert("Error occured on the specifications");
                     }
                     this.executeMicroflow(this.onChangeMicroflow, this.contextObject.getGuid());
                 }
         }

// tslint:disable-next-line:only-arrow-functions
dojoDeclare("widget.Glocation", [ WidgetBase ], function(Source: any) {
    const result: any = {};
    for (const i in Source.prototype) {
        if (i !== "constructor" && Source.prototype.hasOwnProperty(i)) {
            result[i] = Source.prototype[i];
        }
    }
    return result;
}(Glocation));
