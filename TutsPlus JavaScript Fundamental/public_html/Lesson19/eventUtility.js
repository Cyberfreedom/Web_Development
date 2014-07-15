//Exercise  190 --------------------------------------------------
/*
 var eventUtility = {
    addEvent : function(el, type, fn) {
        if (typeof addEventListener !== "undefined") {
            el.addEventListener(type, fn, false);
        } else if (typeof attachEvent !== "undefined") {
            el.attachEvent("on" + type, fn);
        } else {
            el["on" + type] = fn;
        }
    },
    
    removeEvent : function(el, type, fn) {
        if (typeof removeEventListener !== "undefined") {
            el.removeEventListener(type, fn, false);
        } else if (typeof detachEvent !== "undefined") {
            el.detachEvent("on" + type, fn);
        } else {
            el["on" + type] = null;
        }
    },
    
    getTarget : function(event) {
        if (typeof event.target !== "undefined") {
            return event.target;
        } else {
            return event.srcElement;
        }
    },
    
    preventDefault : function(event) {
        if (typeof event.preventDefault !== "undefined") {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};
 */




//Exercise 191---------------------------------------------------------
/*
  var addEvent = function(ev,type,fu){
    if (typeof addEventListener !== "undefined"){
        ev.addEventListener(type,fu,false);
    }
    else if(typeof attachEvent !== "undefined") {
        ev.attachEvent("on"+ type,fu);
    }
    else {
        ev["on" + type] = fu;
    }
 };
 
 var removeEvent = function(ev,type,fu){
     if (typeof removeEventListener !== "undefined"){
         ev.removeEventListener(type,fu,false);
     }
     else if(typeof detachEvent !== "undefined"){
         ev.detachEvent("on"+type,fu);
     }
     else{
         el["on" + type] = null;
     }
 };
 
 var getTarget = function(evtp){
    if (typeof evtp.target !== "undefined"){
        return evtp.target;
    }
    else{
        return evtp.srcElement;
    }
 };
 
 var preventDiefault = function(evt){
     if (typeof evt.preventDefault !== "undefined"){
     evt.preventDefault();
     }
     else{
         evt.returnValue = false;
     }
  };
 */


var eventUtilitys = {
   addEvent : function(ev,type,fu){
     if (typeof addEventListener !== "undefined"){
        ev.addEventListener(type,fu,false);
    }
    else if(typeof attachEvent !== "undefined") {
        ev.attachEvent("on"+ type,fu);
    }
    else {
        ev["on" + type] = fu;
    }
 },
 
   removeEvent : function(ev,type,fu){
     if (typeof removeEventListener !== "undefined"){
         ev.removeEventListener(type,fu,false);
     }
     else if(typeof detachEvent !== "undefined"){
         ev.detachEvent("on"+type,fu);
     }
     else{
         el["on" + type] = null;
     }
 },
 
   getTarget : function(evtp){
    if (typeof evtp.target !== "undefined"){
        return evtp.target;
    }
    else{
        return evtp.srcElement;
    }
  },
 
   preventDiefault : function(evt){
     if (typeof evt.preventDefault !== "undefined"){
     evt.preventDefault();
     }
     else{
         evt.returnValue = false;
     }
  }
};

