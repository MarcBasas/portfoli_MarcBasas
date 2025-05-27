import LiveEditorDesktop from "./LiveEditorDesktop";
import LiveEditorMobile from "./LiveEditorMobile";
import useIsMobile from "../utils/UseIsMobile";

const LiveEditor = ({ project }) => {
  const isMobile = useIsMobile();
  return isMobile ? (
    <LiveEditorMobile project={project} />
  ) : (
    <LiveEditorDesktop project={project} />
  );
};

export default LiveEditor;