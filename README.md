# Jekyll reveal.js Template + Slides Collection

A simple [Jekyll](https://jekyllrb.com/) template for easily and quickly making [reveal.js](https://github.com/hakimel/reveal.js/) presentations.

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
