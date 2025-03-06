import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadindComponents";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    console.log("UseEffect() Started");
    activityStore.loadingActivities();
    console.log("UseEffect() Done");
  }, [activityStore]);

  //no need to include inverted={true}, as it is by default true. this is to change background color
  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading App..." />;

  console.log("Activities loaded!!!");
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
