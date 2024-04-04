import ShowCase from "../components/showcase/LargeShowcase.js";
import ShowcaseContainer from "../components/showcase/LargeShowcaseContainer.js";



export default function LargeShowcase() {
  return (
    <ShowcaseContainer>
      <ShowCase
        imageAlt="EasyTracking"
        //imageSource={}
        showcaseDescription=" to be added"
        showcaseTitle="Easy Tracking"
      />
      <ShowCase
        imageAlt="to be added"
        //imageSource={}
        showcaseDescription="to be added"
        showcaseTitle="to be added"
      />
    </ShowcaseContainer>
  );
}
