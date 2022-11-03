import { LinksFunction } from "@remix-run/server-runtime";
import {
  Button,
  ButtonSize,
  FolderSelectionViewStore,
  FolderTree,
  FolderTreeViewStore,
  Link,
  Panel,
  Text,
} from "kl-module";
import pagesStylesheetUrl from "../styles/pages.css";
import qwilrLogo from "../assets/qwilr-logo-dot.png";
import { Outlet, useNavigate } from "@remix-run/react";
import hubspotTour from "../assets/integrations-onboarding-hubspot-thumb.png";
import headshot from "../assets/headshot.jpeg";
import RainbowBar from "kl-module/js/global/pieces/RainbowBar/RainbowBar";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: pagesStylesheetUrl,
  },
];

export default function Pages() {
  const selectionStore = new FolderSelectionViewStore();
  const navigate = useNavigate();

  const viewStore = new FolderTreeViewStore(
    () => [
      {
        id: "1",
        name: "Saved",
        path: "saved",
      },
      {
        id: "2",
        name: "Accepted",
        path: "accepted",
      },
      {
        id: "3",
        name: "Recent",
        parent: "2",
        path: "recent",
      },
    ],
    selectionStore
  );

  const onSelect = (id: any) => {
    selectionStore.setSelectedFolder(id);
    const whereTo = viewStore.folders.filter((f) => f.id === id)[0].path;
    navigate(`${whereTo}`);
  };

  return (
    <div className="grid items-center" style={{ gridTemplateRows: "72px 1fr" }}>
      <div
        className="flex items-center"
        style={{
          height: "72px",
          borderBottom: "1px solid rgba(129, 162, 178, 0.25)",
        }}
      >
        <div className="flex-1 items-center align-middle">
          <div className="flex items-center align-middle">
            <div className="flex items-center px-6">
              <img className="h-10 w-10" alt="Qwilr logo" src={qwilrLogo} />
              <Text strong size="m" className="px-2">
                Qwilr
              </Text>
            </div>
            <Text
              strong
              size="m"
              style={{ borderLeft: "1px solid #81A2B240" }}
              className="px-6"
            >
              Pages
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button className="" size={ButtonSize.Small}>
            Create Page
          </Button>
          <img className="h-10 w-10 rounded-full" alt="avatar" src={headshot} />
        </div>
      </div>

      <div
        className="side-nav bg-slate"
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "340px 1fr",
        }}
      >
        <div
          className="space-inset-s flex h-full flex-col bg-white"
          style={{
            width: "340px",
            borderRight: "1px solid rgba(129, 162, 178, 0.25)",
          }}
        >
          <div className="flex-1">
            <FolderTree
              viewStore={viewStore}
              disableOptions={true}
              onSelect={onSelect}
            />
          </div>
          <div className="flex px-4">
            <div className="justify-center justify-items-center">
              <WelcomePanel className="fixed bottom-14 h-60 w-72" />
            </div>
            <div className="fixed bottom-2">
              <Link>
                <Text className="px-2" size="s" strong>
                  FAQs
                </Text>
              </Link>
              <Link>
                <Text className="px-2" size="s" strong>
                  Feedback
                </Text>
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

const WelcomePanel = ({ ...props }) => {
  return (
    <Panel elevation={1} {...props}>
      <RainbowBar isTopRounded />
      <div>
        <img
          className="h-full w-full"
          src={hubspotTour}
          alt="Enabling hubspot in Qwilr flow"
        />
      </div>
      <div className="p-3 px-4">
        <div>
          <Text size="s" strong>
            👋 Welcome to Qwilr
          </Text>
        </div>
        <div>
          <Text size="xs" strong>
            Watch a quick 5 minute intro video
          </Text>
        </div>
      </div>
    </Panel>
  );
};
