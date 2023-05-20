import { FireflyProps, ContentField } from "@contentfirefly/core";

export default class MetaFireflyProps extends FireflyProps<MetaProps> {}

class MetaProps {
  title?: ContentField<string>;
}
