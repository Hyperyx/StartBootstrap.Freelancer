import { FireflyProps, ContentField } from "@contentfirefly/core";

export default class PortfolioFireflyProps extends FireflyProps<PortfolioProps> {}

class PortfolioProps {
  title?: ContentField<string>;
  gallery?: ContentField<string[]>;
}
