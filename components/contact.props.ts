import { FireflyProps, ContentField } from "@contentfirefly/core";

export default class ContactFireflyProps extends FireflyProps<ContactProps> {}

class ContactProps {
  title?: ContentField<string>;
  send?: ContentField<string>;
}
