import { LinksFunction } from "@remix-run/server-runtime";
import { Card, Heading, Label, Text } from "kl-module";
import acceptedStylesheetUrl from "../../styles/accepted.css";
import salesProposal from "../../assets/thumbnails/sales-proposal.jpeg";
import businessProposal from "../../assets/thumbnails/business-proposal.jpeg";
import marketingAgencyBrochure from "../../assets/thumbnails/marketing-agency-brochure.jpeg";
import quoteTemplate from "../../assets/thumbnails/quote-template.jpeg";
import Archive from "kl-module/js/global/icons/components/Archive";
import RemoveTemplate from "kl-module/js/global/icons/components/RemoveTemplate";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: acceptedStylesheetUrl,
  },
  {
    rel: "stylesheet",
    href: acceptedStylesheetUrl,
  },
];

export default function Saved() {
  return (
    <div className="px-20" style={{ background: "#E5E5E5" }}>
      <div className="flex items-center py-11">
        <div className="flex flex-1 px-16">
          <Heading strong className="" level="3">
            Saved
          </Heading>
        </div>
        <div className="flex text-slate-600">
          <div className="actions flex items-center px-3">
            <RemoveTemplate className="opacity-75" />
            <Label size="l" className="px-1">
              Remove
            </Label>
          </div>
          <div className="actions flex items-center px-3">
            <Archive className="opacity-75" />
            <Label size="l" className="px-1">
              Archive
            </Label>
          </div>
        </div>
      </div>
      <div className="tile-container">
        <Tile src={quoteTemplate} />
        <Tile src={businessProposal} />
        <Tile src={salesProposal} />
        <Tile src={salesProposal} />
        <Tile src={marketingAgencyBrochure} />
        <Tile src={businessProposal} />
        <Tile src={quoteTemplate} />
        <Tile src={marketingAgencyBrochure} />
        <Tile src={marketingAgencyBrochure} />
        <Tile src={quoteTemplate} />
      </div>
    </div>
  );
}

function Tile({ src }) {
  return (
    <div className="mx-auto">
      <Card className="card" elevation={1}>
        <img src={src} className="image" />
        <div className="p-3">
          <div>
            <Text size="s">Sarif Industries</Text>
          </div>
          <div>
            <Text size="s">Sales proposal for David</Text>
          </div>
        </div>
      </Card>
    </div>
  );
}
