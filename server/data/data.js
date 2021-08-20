var dataCards = [
  {
    question: "What does a DOCTYPE do?",
    answer: `DOCTYPE is an abbreviation for Document Type. 
            A DOCTYPE is always associated to a DTD - for Document Type Definition.
            A DTD defines how documents of a certain type should be structured 
            (i.e. a button can contain a span but not a div), whereas a DOCTYPE 
            declares what DTD a document supposedly respects (i.e. this document 
            respects the HTML DTD).
            For webpages, the DOCTYPE declaration is required. It is used to tell 
            user agents what version of the HTML specifications your document 
            respects. Once a user agent has recognized a correct DOCTYPE, it will 
            trigger the no-quirks mode matching this DOCTYPE for reading the document. 
            If a user agent doesn't recognize a correct DOCTYPE, it will trigger 
            the quirks mode.    
            The DOCTYPE declaration for the HTML5 standards is <!DOCTYPE html>.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: "How do you serve a page with content in multiple languages?",
    answer: `I will assume that it is asking about the most common case, which
     is how to serve a page with content available in multiple languages, but 
     the content within the page should be displayed only in one consistent 
     language. When an HTTP request is made to a server, the requesting user 
     agent usually sends information about language preferences, such as in the
      Accept-Language header. The server can then use this information to return 
      a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the lang attribute in the <html> tag, such as <html lang="en">...</html>.    
    Of course this is useless for letting a search engine know that the same 
    content is available in different languages, and so you must also make use 
    of the hreflang attribute in the <head>. Eg. <link rel="alternate" hreflang="de" 
    href="http://de.example.com/page.html" />    
    In the back end, the HTML markup will contain i18n placeholders and content 
    for the specific language stored in YML or JSON formats. The server then 
    dynamically generates the HTML page with content in that particular language, 
    usually with the help of a back end framework.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `What kind of things must you be wary of when designing or 
    developing for multilingual sites?`,
    answer: `Use lang attribute in your HTML.
    Directing users to their native language - Allow a user to change his 
    country/language easily without hassle.
    Text in raster-based images (e.g. png, gif, jpg, etc.), is not a scalable 
    approach - Placing text in an image is still a popular way to get good-looking, 
    non-system fonts to display on any computer. However, to translate image text, 
    each string of text will need to have a separate image created for each language. 
    Anything more than a handful of replacements like this can quickly get out 
    of control.
    Restrictive words/sentence length - Some content can be longer when written 
    in another language. Be wary of layout or overflow issues in the design. It's 
    best to avoid designing where the amount of text would make or break a design. 
    Character counts come into play with things like headlines, labels, and buttons. 
    They are less of an issue with free-flowing text such as body text or comments.
    Be mindful of how colors are perceived - Colors are perceived differently across 
    languages and cultures. The design should use color appropriately.
    Formatting dates and currencies - Calendar dates are sometimes presented in 
    different ways. Eg. "May 31, 2012" in the U.S. vs. "31 May 2012" in parts of Europe.
    Do not concatenate translated strings - Do not do anything like "The date
     today is " + date. It will break in languages with different word order. Use a 
     template string with parameters substitution for each language instead. For example, 
     look at the following two sentences in English and Chinese respectively: 
     I will travel on {% date %} and {% date %} 我会出发. Note that the position of 
     the variable is different due to grammar rules of the language.
    Language reading direction - In English, we read from left-to-right, top-to-bottom, 
    in traditional Japanese, text is read up-to-down, right-to-left.
    Useful-to-have - include the locale in the path (e.g en_US, zh_CN, etc).`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `What are data- attributes good for?`,
    answer: `Before JavaScript frameworks became popular, front end developers 
    used data- attributes to store extra data within the DOM itself, without other 
    hacks such as non-standard attributes, extra properties on the DOM. It is 
    intended to store custom data private to the page or application, for which 
    there are no more appropriate attributes or elements.
    These days, using data- attributes is generally not encouraged. One reason is 
    that users can modify the data attribute easily by using inspect element in 
    the browser. The data model is better stored within JavaScript itself and stay 
    updated with the DOM via data binding possibly through a library or a framework.    
    However, one perfectly valid use of data attributes, is to add a hook for end to 
    end testing frameworks such as Selenium and Capybara without having to create a 
    meaningless classes or ID attributes. The element needs a way to be found by a 
    particular Selenium spec and something like data-selector='the-thing' is a valid 
    way to do so without convoluting the semantic markup otherwise.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `Consider HTML5 as an open web platform. What are the 
    building blocks of HTML5?`,
    answer: `Semantics - Allowing you to describe more precisely what your content is.
    Connectivity - Allowing you to communicate with the server in new and innovative ways.
    Offline and storage - Allowing webpages to store data on the client-side locally 
    and operate offline more efficiently.
    Multimedia - Making video and audio first-class citizens in the Open Web.
    2D/3D graphics and effects - Allowing a much more diverse range of presentation 
    options.
    Performance and integration - Providing greater speed optimization and better 
    usage of computer hardware.
    Device access - Allowing for the usage of various input and output devices.
    Styling - Letting authors write more sophisticated themes.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `Describe the difference between <script>, <script async> and <script defer>.`,
    answer: `<script> - HTML parsing is blocked, the script is fetched and executed 
    immediately, HTML parsing resumes after the script is executed.
    <script async> - The script will be fetched in parallel to HTML parsing and executed 
    as soon as it is available (potentially before HTML parsing completes). Use async 
    when the script is independent of any other scripts on the page, for example, analytics.
    <script defer> - The script will be fetched in parallel to HTML parsing and executed 
     the page has finished parsing. If there are multiple of them, each deferred script 
     is executed in the order they were encoun­tered in the document. If a script relies 
     on a fully-parsed DOM, the defer attribute will be useful in ensuring that the HTML 
     is fully parsed before executing. There's not much difference in putting a normal 
     <script> at the end of <body>. A deferred script must not contain document.write.
    Note: The async and defer attrib­utes are ignored for scripts that have no src attribute.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `Why is it generally a good idea to position CSS <link>s between 
    <head></head> and JS <script>s just before </body>? Do you know any exceptions?`,
    answer: `Placing <link>s in the <head>. Putting <link>s in the <head> is part 
    of proper specification in building an optimized website. When a page first loads, 
    HTML and CSS are being parsed simultaneously; HTML creates the DOM (Document Object 
        Model) and CSS creates the CSSOM (CSS Object Model). Both are needed to create 
        the visuals in a website, allowing for a quick "first meaningful paint" timing. 
        This progressive rendering is a category optimization sites are measured in 
        their performance scores. Putting stylesheets near the bottom of the document is 
        what prohibits progressive rendering in many browsers. Some browsers block 
        rendering to avoid having to repaint elements of the page if their styles change. 
        The user is then stuck viewing a blank white page. Other times there can be 
        flashes of unstyled content (FOUC), which show a webpage with no styling applied.    
    Placing <script>s just before </body>. <script> tags block HTML parsing while 
    they are being downloaded and executed which can slow down your page. Placing the 
    scripts at the bottom will allow the HTML to be parsed and displayed to the user first.    
    An exception for positioning of <script>s at the bottom is when your script contains
    document.write(), but these days it's not a good practice to use document.write(). 
    Also, placing <script>s at the bottom means that the browser cannot start 
    downloading the scripts until the entire document is parsed. This ensures your 
    code that needs to manipulate DOM elements will not throw an error and halt the 
    entire script. If you need to put <script> in the <head>, use the defer attribute, 
    which will achieve the same effect of downloading and running the script only 
    after the HTML is parsed.    
    Keep in mind that putting scripts just before the closing </body> tag will create 
    the illusion that the page loads faster on an empty cache (since the scripts 
        won't block downloading the rest of the document). However, if you have 
        some code you want to run during page load, it will only start executing 
        after the entire page has loaded. If you put those scripts in the <head> tag, 
        they would start executing before - so on a primed cache the page would actually 
        appear to load faster.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `What is progressive rendering?`,
    answer: `Progressive rendering is the name given to techniques used to improve the 
    performance of a webpage (in particular, improve perceived load time) to render 
    content for display as quickly as possible.
    It used to be much more prevalent in the days before broadband internet but it is 
     used in modern development as mobile data connections are becoming increasingly 
     popular (and unreliable)!
    
    Examples of such techniques: Lazy loading of images - Images on the page are not 
    loaded all at once. JavaScript will be used to load an image when the user scrolls 
    into the part of the page that displays the image.
    Prioritizing visible content (or above-the-fold rendering) - Include only the 
    minimum CSS/content/scripts necessary for the amount of page that would be rendered 
    in the users browser first to display as quickly as possible, you can then use 
    deferred scripts or listen for the DOMContentLoaded/load event to load in other 
    resources and content.
    Async HTML fragments - Flushing parts of the HTML to the browser as the page 
    is constructed on the back end.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `Why you would use a srcset attribute in an image tag? Explain 
    the process the browser uses when evaluating the content of this attribute.`,
    answer: `You would use the srcset attribute when you want to serve different 
    images to users depending on their device display width - serve higher quality 
    images to devices with retina display enhances the user experience while serving 
    lower resolution images to low-end devices increase performance and decrease data 
    wastage (because serving a larger image will not have any visible difference). 
    For example: <img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" 
    src="..." alt=""> tells the browser to display the small, medium or large .jpg 
    graphic depending on the client's resolution. The first value is the image name 
    and the second is the width of the image in pixels. For a device width of 320px, 
    the following calculations are made:
    500 / 320 = 1.5625
    1000 / 320 = 3.125
    2000 / 320 = 6.25
    If the client's resolution is 1x, 1.5625 is the closest, and 500w corresponding 
    to small.jpg will be selected by the browser.    
    If the resolution is retina (2x), the browser will use the closest resolution above 
    the minimum. Meaning it will not choose the 500w (1.5625) because it is greater 
    than 1 and the image might look bad. The browser would then choose the image with 
    a resulting ratio closer to 2 which is 1000w (3.125).    
    srcsets solve the problem whereby you want to serve smaller image files to narrow 
    screen devices, as they don't need huge images like desktop displays do — and also 
    optionally that you want to serve different resolution images to high 
    density/low-density screens.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `Have you used different HTML templating languages before?`,
    answer: `Yes, Pug (formerly Jade), ERB, Slim, Handlebars, Jinja, Liquid, 
    and EJS just to name a few. In my opinion, they are more or less the same and 
    provide similar functionality of escaping content and helpful filters for 
    manipulating the data to be displayed. Most templating engines will also allow 
    you to inject your own filters in the event you need custom processing before 
    display.`,
    category: "HTML",
    level: "basic",
  },
  {
    question: `What is CSS selector specificity and how does it work?`,
    answer: `The browser determines what styles to show on an element depending on 
    the specificity of CSS rules. We assume that the browser has already determined 
    the rules that match a particular element. Among the matching rules, the 
    specificity, four comma-separate values, a, b, c, d are calculated for each rule 
    based on the following:
    a is whether inline styles are being used. If the property declaration is an inline 
    style on the element, a is 1, else 0.
    b is the number of ID selectors.
    c is the number of classes, attributes and pseudo-classes selectors.
    d is the number of tags and pseudo-elements selectors.
    The resulting specificity is not a score, but a matrix of values that can be 
    compared column by column. When comparing selectors to determine which has the 
    highest specificity, look from left to right, and compare the highest value in each 
    column. So a value in column b will override values in columns c and d, no matter 
    what they might be. As such, specificity of 0,1,0,0 would be greater than one of 
    0,0,10,10.    
    In the cases of equal specificity: the latest rule is the one that counts. If you 
    have written the same rule into your stylesheet (regardless of internal or external) 
    twice, then the lower rule in your style sheet is closer to the element to be styled, 
    it is deemed to be more specific and therefore will be applied.    
    I would write CSS rules with low specificity so that they can be easily overridden 
    if necessary. When writing CSS UI component library code, it is important that they 
    have low specificities so that users of the library can override them without using 
    too complicated CSS rules just for the sake of increasing specificity or resorting to 
    !important.`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `What's the difference between "resetting" and "normalizing" 
    CSS? Which would you choose, and why?`,
    answer: `Resetting - Resetting is meant to strip all default browser styling 
    on elements. For e.g. margins, paddings, font-sizes of all elements are reset to 
    be the same. You will have to redeclare styling for common typographic elements.
    Normalizing - Normalizing preserves useful default styles rather than "unstyling" 
    everything. It also corrects bugs for common browser dependencies.
    I would choose resetting when I have a very customized or unconventional site design 
    such that I need to do a lot of my own styling and do not need any default styling 
    to be preserved.`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `Describe floats and how they work.`,
    answer: `Float is a CSS positioning property. Floated elements remain a part 
    of the flow of the page, and will affect the positioning of other elements 
    (e.g. text will flow around floated elements), unlike position: absolute elements, 
    which are removed from the flow of the page.
    The CSS clear property can be used to be positioned below left/right/both floated 
    elements.    
    If a parent element contains nothing but floated elements, its height will be 
    collapsed to nothing. It can be fixed by clearing the float after the floated 
    elements in the container but before the close of the container.    
    The .clearfix hack uses a clever CSS pseudo selector (:after) to clear floats. 
    Rather than setting the overflow on the parent, you apply an additional class 
    clearfix to it. Then apply this CSS:
    
    .clearfix:after {
      content: ' ';
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `Describe z-index and how stacking context is formed.`,
    answer: `The z-index property in CSS controls the vertical stacking order 
    of elements that overlap. z-index only affects elements that have a position 
    value which is not static.
    Without any z-index value, elements stack in the order that they appear in the 
    DOM (the lowest one down at the same hierarchy level appears on top). Elements 
     non-static positioning (and their children) will always appear on top of 
     elements with default static positioning, regardless of HTML hierarchy.    
    A stacking context is an element that contains a set of layers. Within a local 
    stacking context, the z-index values of its children are set relative to that 
    element rather than to the document root. Layers outside of that context — i.e. 
    sibling elements of a local stacking context — can't sit between layers within it. 
    If an element B sits on top of element A, a child element of element A, element C, 
    can never be higher than element B even if element C has a higher z-index than 
    element B.    
    Each stacking context is self-contained - after the element's contents are stacked, 
    the whole element is considered in the stacking order of the parent stacking 
    context. A handful of CSS properties trigger a new stacking context, such as 
    opacity less than 1, filter that is not none, and transform that is notnone.`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `Describe Block Formatting Context (BFC) and how it works.`,
    answer: `A Block Formatting Context (BFC) is part of the visual CSS rendering of 
    a web page in which block boxes are laid out. Floats, absolutely positioned 
    elements, inline-blocks, table-cells, table-captions, and elements with overflow 
    other than visible (except when that value has been propagated to the viewport) 
    establish new block formatting contexts.
    Knowing how to establish a block formatting context is important, because 
    without doing so, the containing box will not contain floated children. This 
    is similar to collapsing margins, but more insidious as you will find entire 
    boxes collapsing in odd ways.
    A BFC is an HTML box that satisfies at least one of the following conditions:
    The value of float is not none.
    The value of position is neither static nor relative.
    The value of display is table-cell, table-caption, inline-block, flex, 
    or inline-flex, grid, or inline-grid.
    The value of overflow is not visible.
    In a BFC, each box's left outer edge touches the left edge of the containing 
    block (for right-to-left formatting, right edges touch).    
    Vertical margins between adjacent block-level boxes in a BFC collapse.`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `What are the various clearing techniques 
    and which is appropriate for what context?`,
    answer: `Empty div method - <div style="clear:both;"></div>.
    Clearfix method - Refer to the .clearfix class above.
    overflow: auto or overflow: hidden method - Parent will establish a new 
    block formatting context and expand to contains its floated children.
    In large projects, I would write a utility .clearfix class and use them 
    in places where I need it. overflow: hidden might clip children if the 
    children is taller than the parent and is not very ideal.`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `Explain CSS sprites, and how you would implement them on a page or site.`,
    answer: `CSS sprites combine multiple images into one single larger image. 
    It is a commonly-used technique for icons (Gmail uses it). How to implement it:
    Use a sprite generator that packs multiple images into one and generate 
    the appropriate CSS for it.
    Each image would have a corresponding CSS class with background-image, 
    background-position and background-size properties defined.
    To use that image, add the corresponding class to your element.
    Advantages:    
    Reduce the number of HTTP requests for multiple images (only one single 
        request is required per spritesheet). But with HTTP2, loading multiple 
        images is no longer much of an issue.
    Advance downloading of assets that won't be downloaded until needed, such as 
    images that only appear upon :hover pseudo-states. Blinking wouldn't be seen.`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `How would you approach fixing browser-specific styling issues?`,
    answer: `After identifying the issue and the offending browser, use a separate 
    style sheet that only loads when that specific browser is being used. 
    This technique requires server-side rendering though.
    Use libraries like Bootstrap that already handles these styling issues 
    for you.
    Use autoprefixer to automatically add vendor prefixes to your code.
    Use Reset CSS or Normalize.css.
    If you're using Postcss (or a similar transpiling library), there may be 
    plugins which allow you to opt in for using modern CSS syntax 
    (and even W3C proposals) that will transform those sections of your code 
    into corresponding safe code that will work in the targets you've used.`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `How do you serve your pages for feature-constrained browsers? 
    What techniques/processes do you use?`,
    answer: `Graceful degradation - The practice of building an application 
    for modern browsers while ensuring it remains functional in older browsers.
    Progressive enhancement - The practice of building an application for a base 
    level of user experience, but adding functional enhancements when a browser 
    supports it. Use caniuse.com to check for feature support. Autoprefixer for 
    automatic vendor prefix insertion. Feature detection using Modernizr. Use CSS 
    Feature queries @support`,
    category: "CSS",
    level: "basic",
  },
  {
    question: `What are the different ways to visually hide content 
    (and make it available only for screen readers)?`,
    answer: `These techniques are related to accessibility (a11y).
    width: 0; height: 0. Make the element not take up any space on the screen 
    at all, resulting in not showing it. 
    position: absolute; left: -99999px. Position it outside of the screen.
    text-indent: -9999px. This only works on text within the block elements.
    Meta tags. For example by using Schema.org, RDF, and JSON-LD.
    WAI-ARIA. A W3C technical specification that specifies how to increase 
    the accessibility of web pages.
    Even if WAI-ARIA is the ideal solution, I would go with the absolute 
    positioning approach, as it has the least caveats, works for most elements 
    and it's an easy technique.`,
    category: "CSS",
    level: "basic",
  },
];

module.exports = dataCards;
