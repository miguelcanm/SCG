/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['dojo/pentaho/common/DateTextBox.js']) {
  _$jscoverage['dojo/pentaho/common/DateTextBox.js'] = [];
  _$jscoverage['dojo/pentaho/common/DateTextBox.js'][1] = 0;
  _$jscoverage['dojo/pentaho/common/DateTextBox.js'][3] = 0;
  _$jscoverage['dojo/pentaho/common/DateTextBox.js'][4] = 0;
  _$jscoverage['dojo/pentaho/common/DateTextBox.js'][6] = 0;
}
_$jscoverage['dojo/pentaho/common/DateTextBox.js'].source = ["dojo<span class=\"k\">.</span>provide<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.DateTextBox\"</span><span class=\"k\">);</span>","","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">\"dijit.form.DateTextBox\"</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">\"dijit.Calendar\"</span><span class=\"k\">);</span>","","dojo<span class=\"k\">.</span>declare<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.DateTextBox\"</span><span class=\"k\">,</span>","\t<span class=\"k\">[</span>dijit<span class=\"k\">.</span>form<span class=\"k\">.</span>DateTextBox<span class=\"k\">],</span>","\t<span class=\"k\">{</span>","","\t\ttemplateString<span class=\"k\">:</span> dojo<span class=\"k\">.</span>cache<span class=\"k\">(</span><span class=\"s\">\"pentaho.common\"</span><span class=\"k\">,</span> <span class=\"s\">\"DropDownBox.html\"</span><span class=\"k\">),</span>","","\t\tpopupClass<span class=\"k\">:</span> <span class=\"s\">\"pentaho.common.Calendar\"</span>","","    <span class=\"k\">}</span>","<span class=\"k\">);</span>",""];
_$jscoverage['dojo/pentaho/common/DateTextBox.js'][1]++;
dojo.provide("pentaho.common.DateTextBox");
_$jscoverage['dojo/pentaho/common/DateTextBox.js'][3]++;
dojo.require("dijit.form.DateTextBox");
_$jscoverage['dojo/pentaho/common/DateTextBox.js'][4]++;
dojo.require("dijit.Calendar");
_$jscoverage['dojo/pentaho/common/DateTextBox.js'][6]++;
dojo.declare("pentaho.common.DateTextBox", [dijit.form.DateTextBox], {templateString: dojo.cache("pentaho.common", "DropDownBox.html"), popupClass: "pentaho.common.Calendar"});
