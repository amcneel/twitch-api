define("twitch-api/templates/main", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XGNJilid", "block": "{\"statements\":[[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"header\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"Displaying \"],[\"append\",[\"unknown\",[\"q\"]],false],[\"text\",\" Streams\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"id\",\"numStreams\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"flush-element\"],[\"text\",\"Total results: \"],[\"append\",[\"unknown\",[\"model\",\"_total\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"table\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"streams\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\\t\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n\\t\"],[\"append\",[\"helper\",[\"stream-view\"],null,[[\"name\",\"game\",\"description\",\"viewers\",\"pic\"],[[\"get\",[\"stream\",\"channel\",\"name\"]],[\"get\",[\"stream\",\"channel\",\"game\"]],[\"get\",[\"stream\",\"channel\",\"status\"]],[\"get\",[\"stream\",\"viewers\"]],[\"get\",[\"stream\",\"preview\",\"medium\"]]]]],false],[\"text\",\"\\n\\n\\n\"]],\"locals\":[\"stream\"]}],\"hasPartials\":false}", "meta": { "moduleName": "twitch-api/templates/main.hbs" } });
});