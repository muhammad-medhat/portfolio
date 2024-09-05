import React from "react";
import { Banner } from "../../../com/Banner";

import { Brief } from "../../../com/brief";
import { ProjectsList } from "../../ProjectsList";
import GetinTouch from "../../../com/GetInTouch";

function Home() {
  return (
    <div className="App color-overlay">
      <Brief />
      <ProjectsList />
      <GetinTouch />
      {/* <!--
    PeoplePerHour Profile Widget
    The div#pph-hire me is the element
    where the iframe will be inserted.
    You may move this element wherever
    you need to display the widget
-->
<div id="pph-hireme"></div>
<script type="text/javascript">
(function(d, s) {
    var useSSL = 'https:' == document.location.protocol;
    var js, where = d.getElementsByTagName(s)[0],
    js = d.createElement(s);
    js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/3143609927/55859.js?width=245&height=320&orientation=vertical&theme=light&hourlies=909073&rnd='+parseInt(Math.random()*10000, 10);
    try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }
}(document, 'script'));
</script> */}
    </div>
  );
}

export default Home;
