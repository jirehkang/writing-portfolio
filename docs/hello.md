---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
sidebar_label: 'Hi!'
---

# Hello

This is my **first Docusaurus document**!

Let's see how to [Create a page](/tutorial-basics/create-a-page.md).

![Docusaurus logo](/img/docusaurus.png)

:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
