import TopNavigationComponent from "./components/navbar";
import {
    OverviewContentSection,
    OverviewImageSection,
    OverviewSection,
    OverviewSubHeading,
    SubscriptionPlanGrid, SubscriptionPlanReminder,
    SubscriptionSection,
    SubscriptionSectionTitle,
} from "./components/homepage/homepage.styles";
import {BaseBtn, SocialPostGrid} from "./components/navbar/nav.styles";


const ImageContent = (props) => {
    return (
        <div style={{ width: '400px', paddingLeft: '50px' }}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

function App() {
  return (
    <div >
      <TopNavigationComponent />
        <OverviewSection>
            <OverviewContentSection>
                <h1>Look good without leaving your house.</h1>
                <OverviewSubHeading>Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</OverviewSubHeading>
                <BaseBtn
                    borderColor="#EF8094"
                    borderWidth="2px"
                    bgColor="white"
                    borderRadius="24px"
                    padding="8px 24px"
                >
                    SIGN UP >
                </BaseBtn>
            </OverviewContentSection>
            <img src="/assets/Marker.png"  style={{ position: 'absolute', right: 50, top: 60, zIndex: 1 }}/>
            <OverviewImageSection src="/assets/BOX.svg" />
        </OverviewSection>
        <SubscriptionSection>
            <SubscriptionSectionTitle>Pick your plan</SubscriptionSectionTitle>
            <img src="/assets/underline.svg" />
        </SubscriptionSection>

        <SubscriptionPlanGrid>
            <img src="/assets/plan1.png" />
            <img src="/assets/plan2.png" />
        </SubscriptionPlanGrid>

        <SubscriptionPlanReminder>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</SubscriptionPlanReminder>

        <SubscriptionSection>
            <SubscriptionSectionTitle>How it works?</SubscriptionSectionTitle>
            <img src="/assets/underline1.svg" />
        </SubscriptionSection>

        <div style={{ display: 'flex', }}>
            <div style={{ width: '45%', justifyContent: 'flex-end', display: 'flex' }}>
                <img src="/assets/evil-lady-returns.png" width="300px" height="300px" />
            </div>
            <div style={{ width: '55%', marginTop: '60px' }}>
                <ImageContent
                    title="Setup your profile & preferences"
                    description="Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you."
                />
            </div>
        </div>

        <div style={{ position: 'relative', left: 550}}>
            <img src="/assets/second-image.png" width="400px" height="300px" />
            <div style={{ paddingLeft: '60px' }}>
                <ImageContent
                    title="Review your custom box"
                    description="Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house."
                />
            </div>
        </div>

        <div style={{ display: 'flex', }}>
            <div style={{ width: '45%', justifyContent: 'flex-end', display: 'flex' }}>
                <img src="/assets/work3.png" width="350px" height="300px" />
            </div>
            <div style={{ width: '55%', marginTop: '60px' }}>
                <ImageContent
                    title="Try it on at home"
                    description="Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with."
                />
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <BaseBtn
                borderColor="#EF8094"
                borderWidth="2px"
                bgColor="white"
                borderRadius="24px"
                padding="8px 24px"
            >
                TRY IT FOR YOURSELF >
            </BaseBtn>
        </div>

        <div style={{ backgroundColor: '#F5F8FF', marginTop: '100px', padding: '40px 10px' }}>
            <SubscriptionSectionTitle >Social Posts</SubscriptionSectionTitle>

            <SocialPostGrid>
                <div>
                    <img src="/assets/socialpost1.png" />
                    <p style={{ paddingTop: '20px' }}>How to rock the lip look that turns heads</p>
                </div>

                <div>
                    <img src="/assets/socialpost2.png" />
                    <p style={{ paddingTop: '20px' }}>Find the perfect shade for the season</p>
                </div>

                <div>
                    <img src="/assets/socialpost3.png" />
                    <p style={{ paddingTop: '20px' }}>The 5 eye shadow secrets you never knew</p>
                </div>

                <div>
                    <img src="/assets/socialpost4.png" />
                    <p style={{ paddingTop: '20px' }}>The pro-tips for at home hair dying</p>
                </div>
            </SocialPostGrid>


            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '60px', marginTop: '40px' }}>
                <BaseBtn
                    borderRadius="24px"
                    bgColor="#EF8094"
                    borderColor="#EF8094"
                    color="white"
                    padding="8px 25px"
                >FOLLOW US ON INSTAGRAM</BaseBtn>
            </div>
        </div>

        <div style={{ margin: '20px', backgroundColor: '#C4C4C4' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px' }}>
                <div style={{ display: 'inline-flex' }}>
                    <img src="/assets/UBLogo.png" width="30px" height="30px" />
                    <p style={{ paddingLeft: '10px', paddingTop: '4px' }}>UPBOX</p>
                </div>
                <div>
                    <img src="/assets/social.png" />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 300px)', justifyContent: 'center', paddingBottom: '20px', gap: '10px' }}>
                <div>
                    <h6>UPBOX</h6>
                    <p>Upbox Bag</p>
                    <p>Upbox Box Platinum</p>
                    <p>Upbox Box VIP</p>
                    <p>Deals</p>
                    <p>Seasonal Items</p>
                    <p>Upbox Promise </p>
                </div>

                <div>
                    <h6>Find Us On</h6>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>TikTok</p>
                    <p>SnapChat</p>
                    <p>Twitter</p>
                </div>

                <div>
                    <h6>Product</h6>
                    <p>Get the App</p>
                    <p>Loyalty Program</p>
                    <p>Affiliates</p>
                    <p>Press</p>
                </div>

                <div>
                    <h6>Help</h6>
                    <p>Returns</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Community</p>
                    <p>Videos</p>
                </div>
            </div>

            <div style={{  display: 'flex', 'justifyContent': 'space-around', borderTop: '2px solid', paddingTop: '10px'  }}>
                <p>© 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use. </p>
                <p>Terms</p>
                <p>Privacy Policy</p>
            </div>

        </div>

    </div>
  );
}

export default App;
