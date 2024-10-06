import van, { State } from "vanjs-core";

const { div, button } = van.tags;

type TabContents = [string, HTMLElement];

const dispatchTabFocusEvent = (
  tabContents: TabContents[],
  selectedTabId: State<number>
) => {
  tabContents.map(([, dom]) => {
    const event = new CustomEvent("tabfocus", {
      bubbles: true,
      cancelable: true,
      detail: {
        oldTabId: selectedTabId.oldVal,
        newTabId: selectedTabId.val,
      },
    });
    dom.dispatchEvent(event);
  });
};

const moveTabFocus = (
  e: KeyboardEvent,
  selectedTabId: State<number>,
  maxTabId: number
) => {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") {
    return;
  }
  const curId = selectedTabId.val;
  if (e.key === "ArrowRight") {
    selectedTabId.val = curId === maxTabId ? 0 : curId + 1;
  } else if (e.key === "ArrowLeft") {
    selectedTabId.val = curId === 0 ? maxTabId : curId - 1;
  }
  const container = e.currentTarget as HTMLElement;
  const activeButton = container?.querySelector(
    `button#tab-${selectedTabId.val}`
  ) as HTMLButtonElement;
  activeButton.focus();
};

const Tabs = (tabContents: TabContents[]) => {
  const container = div({ "data-swgc-component": "tabs" });
  const selectedTabId = van.state(0);
  van.derive(() => dispatchTabFocusEvent(tabContents, selectedTabId));

  return van.add(
    container,
    TabList(tabContents, selectedTabId),
    TabPanels(tabContents, selectedTabId)
  );
};

const TabList = (tabContents: TabContents[], selectedTabId: State<number>) =>
  div(
    {
      role: "tablist",
      onkeydown: (e: KeyboardEvent) =>
        moveTabFocus(e, selectedTabId, tabContents.length - 1),
    },
    tabContents.map(([label], i) =>
      button(
        {
          id: `tab-${i}`,
          role: "tab",
          "aria-selected": () => i === selectedTabId.val,
          "aria-controls": `tabpanel-${i}`,
          tabindex: () => (i === selectedTabId.val ? "0" : "-1"),
          onclick: (_) => (selectedTabId.val = i),
        },
        label ?? ""
      )
    )
  );

const TabPanels = (tabContents: TabContents[], selectedTabId: State<number>) =>
  div(
    tabContents.map(([, dom], i) => {
      return div(
        {
          id: `tabpanel-${i}`,
          role: "tabpanel",
          "aria-labelledby": `tab-${i}`,
          class: () => (i === selectedTabId.val ? "" : "hidden"),
        },
        dom
      );
    })
  );

export default Tabs;
