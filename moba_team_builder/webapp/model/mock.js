sap.ui.define([
], function (
) {
  "use strict";

  return {
    lanes_object: function () {
      let lanes = [{
        lane: 'Top-Lane'
      }, {
        lane: 'Mid-Lane'
      }, {
        lane: 'Bot-Lane'
      }, {
        lane: 'Jungle'
      }, {
        lane: 'Supp'
      },];
      return lanes

    },
    player_info: function () {
      let player_layout = [{ playername: '', hero: '', lane: '' }];
      return player_layout
    }
  };
});