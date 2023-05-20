import { FireflyProps, ContentField } from "@contentfirefly/core";

export default class NavigationFireflyProps extends FireflyProps<NavigationProps> {}

class NavigationProps {
  title?: ContentField<string>;
  menu?: Menu;
}

class Menu {
  title?: ContentField<string>;
  items?: MenuItem[];
}

class MenuItem {
  title?: ContentField<string>;
  url?: ContentField<string>;
}
