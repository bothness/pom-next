import { c as create_ssr_component, g as getContext, b as subscribe, d as add_styles, v as validate_component, i as createEventDispatcher, e as escape, h as add_attribute, m as missing_component, j as spread, k as escape_object, l as escape_attribute_value, f as each, o as globals } from './index-a44b6bb8.js';

function isOutOfViewport(parent, container) {
  const parentBounding = parent.getBoundingClientRect();
  const boundingContainer = container.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + boundingContainer.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
const css$6 = {
  code: ".item.svelte-3e0qet{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-3e0qet{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-3e0qet{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-3e0qet:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-3e0qet{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.notSelectable.svelte-3e0qet{color:var(--itemIsNotSelectableColor, #999)}.item.first.svelte-3e0qet{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-3e0qet:not(.active){background:var(--itemHoverBG, #e7f2ff);color:var(--itemHoverColor, inherit)}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { isSelectable = false } = $$props;
  let { getOptionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.isHover === void 0 && $$bindings.isHover && isHover !== void 0)
    $$bindings.isHover(isHover);
  if ($$props.isSelectable === void 0 && $$bindings.isSelectable && isSelectable !== void 0)
    $$bindings.isSelectable(isSelectable);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  $$result.css.add(css$6);
  {
    {
      const classes = [];
      if (isActive) {
        classes.push("active");
      }
      if (isFirst) {
        classes.push("first");
      }
      if (isHover) {
        classes.push("hover");
      }
      if (item.isGroupHeader) {
        classes.push("groupHeader");
      }
      if (item.isGroupItem) {
        classes.push("groupItem");
      }
      if (!isSelectable) {
        classes.push("notSelectable");
      }
      itemClasses = classes.join(" ");
    }
  }
  return `<div class="${"item " + escape(itemClasses, true) + " svelte-3e0qet"}"><!-- HTML_TAG_START -->${getOptionLabel(item, filterText)}<!-- HTML_TAG_END --></div>`;
});
const css$5 = {
  code: ".listContainer.svelte-1uyqfml{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff);border:var(--listBorder, none);position:var(--listPosition, absolute);z-index:var(--listZIndex, 2);width:100%;left:var(--listLeft, 0);right:var(--listRight, 0)}.virtualList.svelte-1uyqfml{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1uyqfml{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1uyqfml{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848f)}",
  map: null
};
function isItemActive(item, value, optionIdentifier) {
  return value && value[optionIdentifier] === item[optionIdentifier];
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
function isItemHover(hoverItemIndex, item, itemIndex, items) {
  return isItemSelectable(item) && (hoverItemIndex === itemIndex || items.length === 1);
}
function isItemSelectable(item) {
  return item.isGroupHeader && item.isSelectable || item.selectable || !item.hasOwnProperty("selectable");
}
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { container = void 0 } = $$props;
  let { VirtualList: VirtualList2 = null } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { isVirtualList = false } = $$props;
  let { items = [] } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    if (option)
      return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { getGroupHeaderLabel = null } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { value = void 0 } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { isMulti = false } = $$props;
  let { activeItemIndex = 0 } = $$props;
  let { filterText = "" } = $$props;
  let { parent = null } = $$props;
  let { listPlacement = null } = $$props;
  let { listAutoWidth = null } = $$props;
  let { listOffset = 5 } = $$props;
  let listStyle;
  function computePlacement() {
    const { height, width } = parent.getBoundingClientRect();
    listStyle = "";
    listStyle += `min-width:${width}px;width:${listAutoWidth ? "auto" : "100%"};`;
    if (listPlacement === "top" || listPlacement === "auto" && isOutOfViewport(parent, container).bottom) {
      listStyle += `bottom:${height + listOffset}px;`;
    } else {
      listStyle += `top:${height + listOffset}px;`;
    }
  }
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList2 !== void 0)
    $$bindings.VirtualList(VirtualList2);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.activeItemIndex === void 0 && $$bindings.activeItemIndex && activeItemIndex !== void 0)
    $$bindings.activeItemIndex(activeItemIndex);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  $$result.css.add(css$5);
  {
    {
      if (parent && container)
        computePlacement();
    }
  }
  return `

<div class="${["listContainer svelte-1uyqfml", isVirtualList ? "virtualList" : ""].join(" ").trim()}"${add_attribute("style", listStyle, 0)}${add_attribute("this", container, 0)}>${isVirtualList ? `${validate_component(VirtualList2 || missing_component, "svelte:component").$$render($$result, { items, itemHeight }, {}, {
    default: ({ item, i }) => {
      return `<div class="${"listItem"}">${validate_component(Item$1 || missing_component, "svelte:component").$$render(
        $$result,
        {
          item,
          filterText,
          getOptionLabel,
          isFirst: isItemFirst(i),
          isActive: isItemActive(item, value, optionIdentifier),
          isHover: isItemHover(hoverItemIndex, item, i, items),
          isSelectable: isItemSelectable(item)
        },
        {},
        {}
      )}</div>`;
    }
  })}` : `${items.length ? each(items, (item, i) => {
    return `${item.isGroupHeader && !item.isSelectable ? `<div class="${"listGroupTitle svelte-1uyqfml"}">${escape(getGroupHeaderLabel(item))}</div>` : `<div class="${"listItem"}" tabindex="${"-1"}">${validate_component(Item$1 || missing_component, "svelte:component").$$render(
      $$result,
      {
        item,
        filterText,
        getOptionLabel,
        isFirst: isItemFirst(i),
        isActive: isItemActive(item, value, optionIdentifier),
        isHover: isItemHover(hoverItemIndex, item, i, items),
        isSelectable: isItemSelectable(item)
      },
      {},
      {}
    )}
                </div>`}`;
  }) : `${!hideEmptyState ? `<div class="${"empty svelte-1uyqfml"}">${escape(noOptionsMessage)}</div>` : ``}`}`}</div>`;
});
const css$4 = {
  code: ".selection.svelte-pu1q1n{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}",
  map: null
};
const Selection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { getSelectionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$4);
  return `<div class="${"selection svelte-pu1q1n"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>`;
});
const css$3 = {
  code: ".multiSelectItem.svelte-liu9pa.svelte-liu9pa{background:var(--multiItemBG, #ebedef);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-liu9pa.svelte-liu9pa{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-liu9pa.svelte-liu9pa:hover,.multiSelectItem.active.svelte-liu9pa.svelte-liu9pa{background-color:var(--multiItemActiveBG, #006fff);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-liu9pa.svelte-liu9pa:hover{background:var(--multiItemDisabledHoverBg, #ebedef);color:var(--multiItemDisabledHoverColor, #c1c6cc)}.multiSelectItem_clear.svelte-liu9pa.svelte-liu9pa{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616f);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-liu9pa.svelte-liu9pa:hover,.active.svelte-liu9pa .multiSelectItem_clear.svelte-liu9pa{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-liu9pa:hover svg.svelte-liu9pa,.active.svelte-liu9pa .multiSelectItem_clear svg.svelte-liu9pa{fill:var(--multiClearHoverFill, #006fff)}.multiSelectItem_clear.svelte-liu9pa svg.svelte-liu9pa{fill:var(--multiClearFill, #ebedef);vertical-align:top}",
  map: null
};
const MultiSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value = [] } = $$props;
  let { activeValue = void 0 } = $$props;
  let { isDisabled = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { getSelectionLabel = void 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.activeValue === void 0 && $$bindings.activeValue && activeValue !== void 0)
    $$bindings.activeValue(activeValue);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$3);
  return `${each(value, (item, i) => {
    return `<div class="${"multiSelectItem " + escape(activeValue === i ? "active" : "", true) + " " + escape(isDisabled ? "disabled" : "", true) + " svelte-liu9pa"}"><div class="${"multiSelectItem_label svelte-liu9pa"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>
        ${!isDisabled && !multiFullItemClearable ? `<div class="${"multiSelectItem_clear svelte-liu9pa"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}" class="${"svelte-liu9pa"}"><path d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>
            </div>` : ``}
    </div>`;
  })}`;
});
const css$2 = {
  code: "svelte-virtual-list-viewport.svelte-g2cagw{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-g2cagw,svelte-virtual-list-row.svelte-g2cagw{display:block}svelte-virtual-list-row.svelte-g2cagw{overflow:hidden}",
  map: null
};
const VirtualList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = void 0 } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$2);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + escape(height, true) + ";"}" class="${"svelte-g2cagw"}"${add_attribute("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + escape(top, true) + "px; padding-bottom: " + escape(bottom, true) + "px;"}" class="${"svelte-g2cagw"}"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<svelte-virtual-list-row class="${"svelte-g2cagw"}">${slots.default ? slots.default({
      item: row.data,
      i: row.index,
      hoverItemIndex
    }) : `Missing template`}
            </svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
const ClearIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}"><path fill="${"currentColor"}" d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>`;
});
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
const { Object: Object_1 } = globals;
const css$1 = {
  code: ".selectContainer.svelte-17l1npl.svelte-17l1npl{--internalPadding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);box-sizing:border-box;height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding, var(--internalPadding));background:var(--background, #fff);margin:var(--margin, 0)}.selectContainer.svelte-17l1npl input.svelte-17l1npl{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding, var(--internalPadding)));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0);margin:var(--inputMargin, 0)}.selectContainer.svelte-17l1npl input.svelte-17l1npl::placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-17l1npl input.svelte-17l1npl:focus{outline:none}.selectContainer.svelte-17l1npl.svelte-17l1npl:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-17l1npl.svelte-17l1npl{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-17l1npl.svelte-17l1npl{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-17l1npl input.svelte-17l1npl::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectedItem.svelte-17l1npl.svelte-17l1npl{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-17l1npl.svelte-17l1npl:focus{outline:none}.clearSelect.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-17l1npl.svelte-17l1npl:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-17l1npl .clearSelect.svelte-17l1npl{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-17l1npl svg.svelte-17l1npl{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);animation:svelte-17l1npl-rotate 0.75s linear infinite}.spinner_icon.svelte-17l1npl.svelte-17l1npl{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-17l1npl.svelte-17l1npl{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-17l1npl.svelte-17l1npl{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-17l1npl>.svelte-17l1npl{flex:1 1 50px}.selectContainer.multiSelect.svelte-17l1npl input.svelte-17l1npl{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-17l1npl.svelte-17l1npl{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}.a11yText.svelte-17l1npl.svelte-17l1npl{z-index:9999;border:0px;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0px;white-space:nowrap}@keyframes svelte-17l1npl-rotate{100%{transform:rotate(360deg)}}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let showSelectedItem;
  let showClearIcon;
  let placeholderText;
  let showMultiSelect;
  let listProps;
  let ariaSelection;
  let ariaContext;
  const dispatch = createEventDispatcher();
  let { id = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { isMulti = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isCreatable = false } = $$props;
  let { isFocused = false } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Select..." } = $$props;
  let { placeholderAlwaysShow = false } = $$props;
  let { items = null } = $$props;
  let { itemFilter = (label, filterText2, option) => `${label}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { isGroupHeaderSelectable = false } = $$props;
  let { getGroupHeaderLabel = (option) => {
    return option[labelIdentifier] || option.id;
  } } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { hasError = false } = $$props;
  let { containerStyles = "" } = $$props;
  let { getSelectionLabel = (option) => {
    if (option)
      return option[labelIdentifier];
    else
      return null;
  } } = $$props;
  let { createGroupHeaderItem = (groupValue) => {
    return { value: groupValue, label: groupValue };
  } } = $$props;
  let { createItem = (filterText2) => {
    return { value: filterText2, label: filterText2 };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { isSearchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { isClearable = true } = $$props;
  let { isWaiting = false } = $$props;
  let { listPlacement = "auto" } = $$props;
  let { listOpen = false } = $$props;
  let { isVirtualList = false } = $$props;
  let { loadOptionsInterval = 300 } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { itemHeight = 40 } = $$props;
  let { Icon = void 0 } = $$props;
  let { iconProps = {} } = $$props;
  let { showChevron = false } = $$props;
  let { showIndicator = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { indicatorSvg = void 0 } = $$props;
  let { listOffset = 5 } = $$props;
  let { ClearIcon: ClearIcon$1 = ClearIcon } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { List: List$1 = List } = $$props;
  let { Selection: Selection$1 = Selection } = $$props;
  let { MultiSelection: MultiSelection$1 = MultiSelection } = $$props;
  let { VirtualList: VirtualList$1 = VirtualList } = $$props;
  function filterMethod(args) {
    if (args.loadOptions && args.filterText.length > 0)
      return;
    if (!args.items)
      return [];
    if (args.items && args.items.length > 0 && typeof args.items[0] !== "object") {
      args.items = convertStringItemsToObjects(args.items);
    }
    let filterResults = args.items.filter((item) => {
      let matchesFilter = itemFilter(getOptionLabel(item, args.filterText), args.filterText, item);
      if (matchesFilter && args.isMulti && args.value && Array.isArray(args.value)) {
        matchesFilter = !args.value.some((x) => {
          return x[args.optionIdentifier] === item[args.optionIdentifier];
        });
      }
      return matchesFilter;
    });
    if (args.groupBy) {
      filterResults = filterGroupedItems(filterResults);
    }
    if (args.isCreatable) {
      filterResults = addCreatableItem(filterResults, args.filterText);
    }
    return filterResults;
  }
  function addCreatableItem(_items, _filterText) {
    if (_filterText.length === 0)
      return _items;
    const itemToCreate = createItem(_filterText);
    if (_items[0] && _filterText === _items[0][labelIdentifier])
      return _items;
    itemToCreate.isCreator = true;
    return [..._items, itemToCreate];
  }
  let { selectedValue = null } = $$props;
  let activeValue;
  let prev_value;
  let prev_filterText;
  let prev_isFocused;
  let hoverItemIndex;
  const getItems = debounce(
    async () => {
      isWaiting = true;
      let res = await loadOptions(filterText).catch((err) => {
        console.warn("svelte-select loadOptions error :>> ", err);
        dispatch("error", { type: "loadOptions", details: err });
      });
      if (res && !res.cancelled) {
        if (res) {
          if (res && res.length > 0 && typeof res[0] !== "object") {
            res = convertStringItemsToObjects(res);
          }
          filteredItems = [...res];
          dispatch("loaded", { items: filteredItems });
        } else {
          filteredItems = [];
        }
        if (isCreatable) {
          filteredItems = addCreatableItem(filteredItems, filterText);
        }
        isWaiting = false;
        isFocused = true;
        listOpen = true;
      }
    },
    loadOptionsInterval
  );
  function setValue() {
    if (typeof value === "string") {
      value = { [optionIdentifier]: value, label: value };
    } else if (isMulti && Array.isArray(value) && value.length > 0) {
      value = value.map((item) => typeof item === "string" ? { value: item, label: item } : item);
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign(
      {
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: false,
        tabindex: 0,
        type: "text",
        "aria-autocomplete": "list"
      },
      inputAttributes
    );
    if (id) {
      _inputAttributes.id = id;
    }
    if (!isSearchable) {
      _inputAttributes.readonly = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            isGroupHeader: true,
            isSelectable: isGroupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    if (isMulti) {
      if (JSON.stringify(value) !== JSON.stringify(prev_value)) {
        if (checkValueForDuplicates()) {
          dispatch("select", value);
        }
      }
      return;
    }
    {
      dispatch("select", value);
    }
  }
  function setupFocus() {
    if (isFocused || listOpen) {
      handleFocus();
    } else {
      if (input)
        input.blur();
    }
  }
  function setupMulti() {
    if (value) {
      if (Array.isArray(value)) {
        value = [...value];
      } else {
        value = [value];
      }
    }
  }
  function setupFilterText() {
    if (filterText.length === 0)
      return;
    isFocused = true;
    listOpen = true;
    if (loadOptions) {
      getItems();
    } else {
      listOpen = true;
      if (isMulti) {
        activeValue = void 0;
      }
    }
  }
  function checkValueForDuplicates() {
    let noDuplicates = true;
    if (value) {
      const ids = [];
      const uniqueValues = [];
      value.forEach((val) => {
        if (!ids.includes(val[optionIdentifier])) {
          ids.push(val[optionIdentifier]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });
      if (!noDuplicates)
        value = uniqueValues;
    }
    return noDuplicates;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[optionIdentifier] : value[optionIdentifier];
    return items.find((item) => item[optionIdentifier] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object"))
      return;
    if (!value || (isMulti ? value.some((selection) => !selection || !selection[optionIdentifier]) : !value[optionIdentifier]))
      return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus() {
    isFocused = true;
    if (input)
      input.focus();
  }
  function handleClear() {
    value = void 0;
    listOpen = false;
    dispatch("clear", value);
    handleFocus();
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label, count) => {
    return `You are currently focused on option ${label}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection() {
    let selected = void 0;
    if (isMulti && value.length > 0) {
      selected = value.map((v) => getSelectionLabel(v)).join(", ");
    } else {
      selected = getSelectionLabel(value);
    }
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!isFocused || !filteredItems || filteredItems.length === 0)
      return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let label = getSelectionLabel(_item);
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(label, count);
    } else {
      return ariaFocused();
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isCreatable === void 0 && $$bindings.isCreatable && isCreatable !== void 0)
    $$bindings.isCreatable(isCreatable);
  if ($$props.isFocused === void 0 && $$bindings.isFocused && isFocused !== void 0)
    $$bindings.isFocused(isFocused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderAlwaysShow === void 0 && $$bindings.placeholderAlwaysShow && placeholderAlwaysShow !== void 0)
    $$bindings.placeholderAlwaysShow(placeholderAlwaysShow);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0)
    $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0)
    $$bindings.groupFilter(groupFilter);
  if ($$props.isGroupHeaderSelectable === void 0 && $$bindings.isGroupHeaderSelectable && isGroupHeaderSelectable !== void 0)
    $$bindings.isGroupHeaderSelectable(isGroupHeaderSelectable);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0)
    $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.createItem === void 0 && $$bindings.createItem && createItem !== void 0)
    $$bindings.createItem(createItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0)
    $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0)
    $$bindings.inputStyles(inputStyles);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.isWaiting === void 0 && $$bindings.isWaiting && isWaiting !== void 0)
    $$bindings.isWaiting(isWaiting);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0)
    $$bindings.listOpen(listOpen);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.loadOptionsInterval === void 0 && $$bindings.loadOptionsInterval && loadOptionsInterval !== void 0)
    $$bindings.loadOptionsInterval(loadOptionsInterval);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0)
    $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.Icon === void 0 && $$bindings.Icon && Icon !== void 0)
    $$bindings.Icon(Icon);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0)
    $$bindings.showChevron(showChevron);
  if ($$props.showIndicator === void 0 && $$bindings.showIndicator && showIndicator !== void 0)
    $$bindings.showIndicator(showIndicator);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.indicatorSvg === void 0 && $$bindings.indicatorSvg && indicatorSvg !== void 0)
    $$bindings.indicatorSvg(indicatorSvg);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  if ($$props.ClearIcon === void 0 && $$bindings.ClearIcon && ClearIcon$1 !== void 0)
    $$bindings.ClearIcon(ClearIcon$1);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.List === void 0 && $$bindings.List && List$1 !== void 0)
    $$bindings.List(List$1);
  if ($$props.Selection === void 0 && $$bindings.Selection && Selection$1 !== void 0)
    $$bindings.Selection(Selection$1);
  if ($$props.MultiSelection === void 0 && $$bindings.MultiSelection && MultiSelection$1 !== void 0)
    $$bindings.MultiSelection(MultiSelection$1);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList$1 !== void 0)
    $$bindings.VirtualList(VirtualList$1);
  if ($$props.selectedValue === void 0 && $$bindings.selectedValue && selectedValue !== void 0)
    $$bindings.selectedValue(selectedValue);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0)
    $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0)
    $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0)
    $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0)
    $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredItems = filterMethod({
      loadOptions,
      filterText,
      items,
      value,
      isMulti,
      optionIdentifier,
      groupBy,
      isCreatable
    });
    {
      {
        if (selectedValue)
          console.warn("selectedValue is no longer used. Please use value instead.");
      }
    }
    {
      updateValueDisplay(items);
    }
    {
      {
        if (value)
          setValue();
      }
    }
    {
      {
        if (inputAttributes || !isSearchable)
          assignInputAttributes();
      }
    }
    {
      {
        if (isMulti) {
          setupMulti();
        }
      }
    }
    {
      {
        if (isMulti && value && value.length > 1) {
          checkValueForDuplicates();
        }
      }
    }
    {
      {
        if (value)
          dispatchSelectedItem();
      }
    }
    {
      {
        if (!value && isMulti && prev_value) {
          dispatch("select", value);
        }
      }
    }
    {
      {
        if (isFocused !== prev_isFocused) {
          setupFocus();
        }
      }
    }
    {
      {
        if (filterText !== prev_filterText) {
          setupFilterText();
        }
      }
    }
    showSelectedItem = value && filterText.length === 0;
    showClearIcon = showSelectedItem && isClearable && !isDisabled && !isWaiting;
    placeholderText = placeholderAlwaysShow && isMulti ? placeholder : value ? "" : placeholder;
    showMultiSelect = isMulti && value && value.length > 0;
    listProps = {
      Item: Item$1,
      filterText,
      optionIdentifier,
      noOptionsMessage,
      hideEmptyState,
      isVirtualList,
      VirtualList: VirtualList$1,
      value,
      isMulti,
      getGroupHeaderLabel,
      items: filteredItems,
      itemHeight,
      getOptionLabel,
      listPlacement,
      parent: container,
      listAutoWidth,
      listOffset
    };
    ariaSelection = value ? handleAriaSelection() : "";
    ariaContext = handleAriaContent();
    $$rendered = `

<div class="${[
      "selectContainer " + escape(containerClasses, true) + " svelte-17l1npl",
      (hasError ? "hasError" : "") + " " + (isMulti ? "multiSelect" : "") + " " + (isDisabled ? "disabled" : "") + " " + (isFocused ? "focused" : "")
    ].join(" ").trim()}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", container, 0)}><span aria-live="${"polite"}" aria-atomic="${"false"}" aria-relevant="${"additions text"}" class="${"a11yText svelte-17l1npl"}">${isFocused ? `<span id="${"aria-selection"}">${escape(ariaSelection)}</span>
            <span id="${"aria-context"}">${escape(ariaContext)}</span>` : ``}</span>

    ${Icon ? `${validate_component(Icon || missing_component, "svelte:component").$$render($$result, Object_1.assign(iconProps), {}, {})}` : ``}

    ${showMultiSelect ? `${validate_component(MultiSelection$1 || missing_component, "svelte:component").$$render(
      $$result,
      {
        value,
        getSelectionLabel,
        activeValue,
        isDisabled,
        multiFullItemClearable
      },
      {},
      {}
    )}` : ``}

    <input${spread(
      [
        { readonly: !isSearchable || null },
        escape_object(_inputAttributes),
        {
          placeholder: escape_attribute_value(placeholderText)
        },
        {
          style: escape_attribute_value(inputStyles)
        },
        { disabled: isDisabled || null }
      ],
      { classes: "svelte-17l1npl" }
    )}${add_attribute("this", input, 0)}${add_attribute("value", filterText, 0)}>

    ${!isMulti && showSelectedItem ? `<div class="${"selectedItem svelte-17l1npl"}">${validate_component(Selection$1 || missing_component, "svelte:component").$$render($$result, { item: value, getSelectionLabel }, {}, {})}</div>` : ``}

    ${showClearIcon ? `<div class="${"clearSelect svelte-17l1npl"}" aria-hidden="${"true"}">${validate_component(ClearIcon$1 || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}

    ${!showClearIcon && (showIndicator || showChevron && !value || !isSearchable && !isDisabled && !isWaiting && (showSelectedItem && !isClearable || !showSelectedItem)) ? `<div class="${"indicator svelte-17l1npl"}" aria-hidden="${"true"}">${indicatorSvg ? `<!-- HTML_TAG_START -->${indicatorSvg}<!-- HTML_TAG_END -->` : `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 20 20"}" focusable="${"false"}" aria-hidden="${"true"}" class="${"svelte-17l1npl"}"><path d="${"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\n          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\n          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\n          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\n          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}"></path></svg>`}</div>` : ``}

    ${isWaiting ? `<div class="${"spinner svelte-17l1npl"}"><svg class="${"spinner_icon svelte-17l1npl"}" viewBox="${"25 25 50 50"}"><circle class="${"spinner_path svelte-17l1npl"}" cx="${"50"}" cy="${"50"}" r="${"20"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"5"}" stroke-miterlimit="${"10"}"></circle></svg></div>` : ``}

    ${listOpen ? `${validate_component(List$1 || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(listProps, { hoverItemIndex }),
      {
        hoverItemIndex: ($$value) => {
          hoverItemIndex = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

    ${!isMulti || isMulti && !showMultiSelect ? `<input${add_attribute("name", inputAttributes.name, 0)} type="${"hidden"}"${add_attribute("value", value ? getSelectionLabel(value) : null, 0)} class="${"svelte-17l1npl"}">` : ``}

    ${isMulti && showMultiSelect ? `${each(value, (item) => {
      return `<input${add_attribute("name", inputAttributes.name, 0)} type="${"hidden"}"${add_attribute("value", item ? getSelectionLabel(item) : null, 0)} class="${"svelte-17l1npl"}">`;
    })}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "#search.svelte-12es4ss{width:100%;height:50px;margin-top:1px;background-color:white;--height:50px;--borderRadius:0px}#search input{width:calc(100% - 30px)}.search-rtl.svelte-12es4ss{left:auto !important;right:50px}.search-rtl .indicator{right:auto !important;left:10px}",
  map: null
};
const Select_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rtl, $$unsubscribe_rtl;
  let $lang, $$unsubscribe_lang;
  let $t, $$unsubscribe_t;
  const lang = getContext("lang");
  $$unsubscribe_lang = subscribe(lang, (value2) => $lang = value2);
  const rtl = getContext("rtl");
  $$unsubscribe_rtl = subscribe(rtl, (value2) => $rtl = value2);
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value2) => $t = value2);
  let { value = null } = $$props;
  let { items = [] } = $$props;
  let { colorBorder = "rgba(255,255,255,0)" } = $$props;
  let { colorIndicator = "grey" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.colorBorder === void 0 && $$bindings.colorBorder && colorBorder !== void 0)
    $$bindings.colorBorder(colorBorder);
  if ($$props.colorIndicator === void 0 && $$bindings.colorIndicator && colorIndicator !== void 0)
    $$bindings.colorIndicator(colorIndicator);
  $$result.css.add(css);
  $$unsubscribe_rtl();
  $$unsubscribe_lang();
  $$unsubscribe_t();
  return `<div id="${"search"}" class="${["svelte-12es4ss", $rtl ? "search-rtl" : ""].join(" ").trim()}"${add_styles({
    "--selectedItemPadding": 0,
    "--border": `2px solid ${colorBorder}`,
    "--indicatorFill": colorIndicator
  })}>${validate_component(Select, "Select").$$render(
    $$result,
    {
      value,
      items,
      optionIdentifier: "id",
      labelIdentifier: "name_" + $lang,
      placeholder: $t("Find a place"),
      showIndicator: true
    },
    {},
    {}
  )}
</div>`;
});

export { Select_1 as S };
//# sourceMappingURL=Select-38b6d29c.js.map
