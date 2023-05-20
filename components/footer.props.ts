import { FireflyProps, ContentField } from "@contentfirefly/core";

export default class FooterFireflyProps extends FireflyProps<FooterProps> {}

class FooterProps {
  columns?: FooterItem[];
}

class FooterItem {
  title?: ContentField<string>;
  text?: ContentField<string>;
  actions?: FooterAction[];
}

class FooterAction {
  social?: ContentField<string>;
}
