import { FireflyProps, ContentField } from "@contentfirefly/core";

export default class CopyrightFireflyProps extends FireflyProps<CopyrightProps> {}

class CopyrightProps {
  title?: ContentField<string>;
}
