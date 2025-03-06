import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
  Segment,
} from "semantic-ui-react";

import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadindComponents";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectActivity,
  } = activityStore;

  if (!activity) return <LoadingComponent />;

  return (
    <Segment clearing>
      <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <CardContent>
          <CardHeader>{activity.title}</CardHeader>
          <CardMeta>
            <span>{activity.date}</span>
          </CardMeta>
          <CardDescription>{activity.description}</CardDescription>
        </CardContent>
        <CardContent extra>
          <ButtonGroup>
            <Button
              onClick={() => openForm(activity.id)}
              basic
              color="blue"
              content="Edit"
            />
            <Button
              onClick={cancelSelectActivity}
              basic
              color="grey"
              content="Cancel"
            />
          </ButtonGroup>
        </CardContent>
      </Card>
    </Segment>
  );
});
