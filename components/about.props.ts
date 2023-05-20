import { FireflyProps, ContentField } from "@contentfirefly/core";

export default class AboutFireflyProps extends FireflyProps<AboutProps> {}

class AboutProps {
  title?: ContentField<string>;
  columns?: Story[];
  callToAction?: ContentField<string>;
}

class Story {
  text?: ContentField<string>;
}
