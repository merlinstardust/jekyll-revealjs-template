# Jekyll reveal.js Template + Slides Collection

A simple <a href='https://jekyllrb.com/' target='_blank'>Jekyll</a> template for easily and quickly making <a href='https://github.com/hakimel/reveal.js/' target='_blank'>reveal.js</a> presentations.

## <a href='https://jekyll-revealjs-template.github.io/' target='_blank'>See the demo</a>

## Jekyll Layout

Using a Jekyll layout, Reveal presentations only need slides defined by the `<section>` tag. No more messing around with the head and script configs.

```
<section>
  <h1>
    Example
  </h1>
</section>

<section>
  <h1>
    Slide 2
  </h1>
</section>
```

## Slides Collection

Presentations are stored in a special `_slides` which can be looped over with a `site.slides` variable. This is defined in `_config.yml`

```
<div class='row'>
  {% for slide in site.slides %}
    <iframe src='{{slide.url}}'></iframe>
  {% endfor %}
</div>
```

## YAML Front Matter

Themes can be overridden with [YAML Front Matter](https://jekyllrb.com/docs/frontmatter/) or change the default in `_config.yml`

```
---
theme: white
---

<section>
  <h1>
    Example 2 - Overridden Theme
  </h1>
</section>
```
