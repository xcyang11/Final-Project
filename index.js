/*
 * Name: Xiaochi Yang
 * Date: May 19, 2021
 * Section: CSE 154 AG
 *
 * This is the JS to implement the UI for my about.html page. It enables
 * our clients to interact with the page. Specifically, our clients now are able
 * to change my index.html page by clicking some buttons. It fetches memes so
 * that clients can append them randomly into our page. It also fetches info. from
 * my own serverm and the response will also be appended to index.html.
 */

'use strict';

(function() {

  const URL = "https://api.imgflip.com/get_memes";

  window.addEventListener('load', init);

  /**
   * The initial function of the JS, which adds event listenter to my buttons
   * and conducts some preparation for my program.
   * Clients now can interact with my program by clicking the buttons.
   */
  function init() {
      
    let button1 = id("show");
    button1.addEventListener("click", change);

  }
  

  function change() {
    this.textContent = "Hope you like my website";
    setTimeout(show, 3000);
  }

  function show() {
    this.textContent = "Hope you like my website";
    let hiddenText = id("hidden");
    hiddenText.classList.add('is-visible');

    
  }

  /** Generates new text for clients and changes button's text */
  function apology() {

    let hiddenText = id("hidden");
    hiddenText.textContent = "I am truly sorry. I shouldn't say that.";

  }

  /** Moves a piece of content to the section it belongs to*/
  function move() {
    let element = id("intro");
    let container = id("container");
    container.appendChild(element);

    this.textContent = "I've done my job too!";
  }
  
  /**
   * Returns an element by its ID, so that we can use it later on
   * @param {string} idName - the ID of the element I want
   * @return {object} DOM object associated with the ID (null of none).
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns an element by its selector, so that we can use it later on
   * @param {string} selector - the selector of the element I want
   * @return {object} DOM object associated with the selector (null of none).
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }

  /**
   * Create a new single tag
   * @param {string} tagname - the name of the tag that I want
   * @return {object} DOM object associated with the tagname
   */
  function gen(tagname) {
    return document.createElement(tagname);
  }
})();