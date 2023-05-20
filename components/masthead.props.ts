import { FireflyProps, ContentField } from "@contentfirefly/core";

export default class MastFireflyProps extends FireflyProps<MastProps> {}

class MastProps {
  title?: ContentField<string>;
  professions?: Profession[];
  avatar?: ContentField<string>;
}

class Profession {
  title?: ContentField<string>;
}
