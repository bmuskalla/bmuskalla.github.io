require 'rss'
require 'open-uri'
require 'kramdown'
require 'uri'

posts = [
    "https://eclipsesource.com/blogs/2010/05/13/using-equinox-security-in-rcp-and-rap/",
    "https://eclipsesource.com/blogs/2010/04/27/google-summer-of-code-2010-is-on/",
    "https://eclipsesource.com/blogs/2010/04/26/sketch-your-ui/",
    "https://eclipsesource.com/blogs/2010/04/22/eclipse-democamp-2010-in-mannheim/",
    "https://eclipsesource.com/blogs/2010/04/20/drawing-with-rap-yup/",
    "https://eclipsesource.com/blogs/2010/04/14/revamping-eclipse-examples/",
    "https://eclipsesource.com/blogs/2010/03/22/emf-and-rap-what-a-lovely-pair/",
    "https://eclipsesource.com/blogs/2009/11/23/eclipsert-rap-around-the-world/",
    "https://eclipsesource.com/blogs/2009/11/16/eclipse-rap-1-3-m3-hits-the-road/",
    "https://eclipsesource.com/blogs/2009/10/08/eclipse-rap-1-3-m2-released/",
    "https://eclipsesource.com/blogs/2009/09/11/picasso-paints-the-web/",
    "https://eclipsesource.com/blogs/2009/08/25/e4-on-the-web/",
    "https://eclipsesource.com/blogs/2009/07/06/integrating-birt-into-rap-applications/",
    "https://eclipsesource.com/blogs/2009/07/03/galileo-and-the-rap-runtime/",
    "https://eclipsesource.com/blogs/2009/03/13/tease-the-rap-committers/"
]

postsTest = [
    "https://eclipsesource.com/blogs/2009/03/13/tease-the-rap-committers/"
]

def substringBetween(html, startMarker, endMarker)
    startPos = html.index(startMarker) + startMarker.length
    endPos = html.index(endMarker) - 1
    return html[startPos..endPos]
end

def convertPost(posturl)
    posthtml = open(posturl).read
    title = substringBetween(posthtml, "<h1 ><span>", "</span></h1>")
    path = URI(posturl).path.split('/')
    date = path[2] + "-" + path[3] + "-" + path[4]
    filename = date + "-" + path[5] + ".md"
    contentHtml = substringBetween(posthtml, "Comments</a></div></div></div><p>", "<div class=\"qodef-post-info-bottom\">")
    document = Kramdown::Document.new(contentHtml, :html_to_native => true)
    postcontent = document.to_kramdown
    
    postString = <<-POST
+++
title = "#{title}"
description = ""
tags = [
    "java",
    "design",
    "refactoring",
]
date = "#{date}"
categories = [
    "Development"
]
highlight = "true"
+++

#{postcontent}
POST
    open('../content/blog/' + filename + ".md", 'w') { |f|
        f.puts postString
    }
end


postsTest.each do |posturl|
    convertPost(posturl)
end
