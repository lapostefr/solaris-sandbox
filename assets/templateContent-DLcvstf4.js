const e=`<div style="padding: 0 20px; line-height: 30px; background: #d2d2d1; color: #3C3C3C; opacity: .5;">
<div class="header__arround">Exemple de contenu dans le slot headerTop</div>
</div>`,i=` <div style="display: flex; align-items: center; padding: 0 30px; height: 80px;">
<SolarisLogo :type="'regular'"/>
<div style="margin-left: 30px;">Exemple de contenu</div>
</div>`,s=`<SolarisHeaderLight v-bind="args" @logo-clicked="handleLogoClick">
<SolarisHeaderSecure />
</SolarisHeaderLight>
<SolarisProgress :progressList="progressArray" v-if="progressArray" />`,a=` <div style="padding: 0 20px; line-height: 30px; background: #d2d2d1; color: #3C3C3C; opacity: .5;">
<div class="header__arround">Exemple de contenu dans le slot headerBottom</div>
</div>`,t=`<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>
<p style="margin: 0; padding: 30px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tortor vulputate massa vehicula imperdiet sed non nibh. Aenean sit amet condimentum ligula. Praesent blandit tincidunt turpis sit amet malesuada. Quisque dui tellus, condimentum fringilla volutpat ut, posuere in sapien. Fusce posuere eros nisl, ac convallis neque pharetra a. Curabitur vitae cursus eros. In eu neque id metus lobortis interdum. Duis non condimentum metus, vitae sodales lectus. In sagittis volutpat orci a maximus. Morbi rhoncus ipsum nec magna fringilla facilisis. Proin ex enim, mollis sit amet scelerisque eget, euismod vitae mauris. Donec rhoncus nibh eu pretium aliquam. Curabitur sapien nibh, iaculis vitae sapien sit amet, sodales sodales quam. Suspendisse auctor bibendum laoreet. Morbi vitae nisi a libero posuere ultricies et ac erat. Maecenas fringilla quis nulla et pretium.
</p>`;export{i as a,a as b,t as c,s as d,e as t};
