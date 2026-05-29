# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: interactions.spec.ts >> Interactions >> AI Insight Click - redirect works
- Location: tests\e2e\interactions.spec.ts:5:7

# Error details

```
Error: Test failed due to caught errors:
PageError: Cannot read properties of null (reading 'appendChild')
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - link "Lelungo" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: Lelungo
      - generic [ref=e10]:
        - navigation [ref=e11]:
          - link "Explore" [ref=e12] [cursor=pointer]:
            - /url: /
          - link "Dashboard" [ref=e13] [cursor=pointer]:
            - /url: /dashboard
            - img [ref=e14]
            - text: Dashboard
        - button "Toggle theme" [ref=e16] [cursor=pointer]:
          - img [ref=e17]
  - main [ref=e19]:
    - generic [ref=e20]:
      - generic [ref=e22]:
        - generic [ref=e23]: 🔥
        - generic [ref=e24]:
          - paragraph [ref=e25]: AI Suggestion
          - paragraph [ref=e26]: Flights to Tokyo dropped 32% today
      - generic [ref=e27]:
        - generic [ref=e28]:
          - img [ref=e29]
          - generic [ref=e31]: Smart Deal Engine — Real-time tracking
        - heading "Find Hidden Travel Deals Before Everyone Else." [level=1] [ref=e32]:
          - text: Find Hidden Travel Deals
          - text: Before Everyone Else.
        - paragraph [ref=e33]: AI-powered insights for smarter trips. We scan thousands of sources to score the true value of every flight and hotel.
        - generic [ref=e36]:
          - generic [ref=e37]:
            - img [ref=e39]
            - generic [ref=e42]:
              - generic [ref=e43]: From
              - textbox "From" [ref=e44]:
                - /placeholder: Jakarta (CGK)
          - generic [ref=e46]:
            - img [ref=e48]
            - generic [ref=e51]:
              - generic [ref=e52]: To
              - textbox "To" [ref=e53]:
                - /placeholder: Tokyo (NRT)
          - generic [ref=e55]:
            - img [ref=e57]
            - generic [ref=e59]:
              - generic [ref=e60]: Date
              - textbox "Date" [ref=e61]:
                - /placeholder: Add dates
          - generic [ref=e63]:
            - img [ref=e65]
            - generic [ref=e67]:
              - generic [ref=e68]: Budget
              - textbox "Budget" [ref=e69]:
                - /placeholder: Optional max
          - button "Search Deals" [ref=e71] [cursor=pointer]:
            - img [ref=e73]
            - generic [ref=e76]: Search Deals
        - generic [ref=e77]:
          - generic [ref=e78]:
            - img [ref=e79]
            - generic [ref=e84]: 10,000+ users
          - generic [ref=e86]:
            - img [ref=e87]
            - generic [ref=e90]: AI verified deals
    - generic [ref=e92]:
      - generic [ref=e93]:
        - paragraph [ref=e94]: How it works
        - heading "Deal intelligence, not just listings" [level=2] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - img [ref=e99]
          - paragraph [ref=e102]: STEP 1
          - heading "We aggregate deals" [level=3] [ref=e103]
          - paragraph [ref=e104]: Pulls live prices from Traveloka, Agoda, Tiket.com, AirAsia, Booking.com.
        - generic [ref=e105]:
          - img [ref=e107]
          - paragraph [ref=e110]: STEP 2
          - heading "Insight engine scores them" [level=3] [ref=e111]
          - paragraph [ref=e112]: "Each deal gets tagged: Rare Deal, Hot Deal, Good Deal, or Fair Price — based on historical prices."
        - generic [ref=e113]:
          - img [ref=e115]
          - paragraph [ref=e117]: STEP 3
          - heading "You book in one click" [level=3] [ref=e118]
          - paragraph [ref=e119]: Click View Deal, we track your click, and send you straight to the partner booking page.
    - generic [ref=e120]:
      - generic [ref=e121]:
        - paragraph [ref=e122]: Live Feed
        - heading "AI Travel Insights" [level=2] [ref=e123]
        - paragraph [ref=e124]: Our engine scans millions of data points to find anomalies.
      - generic [ref=e125]:
        - article [ref=e126]:
          - generic [ref=e127]:
            - generic [ref=e128]:
              - generic [ref=e129]:
                - img [ref=e130]
                - text: "AI Confidence: 87%"
              - generic [ref=e140]:
                - img [ref=e141]
                - text: Price may rise in 6 hours
            - heading "✈️ Jakarta → Singapore now 28% cheaper" [level=3] [ref=e144]
            - generic [ref=e145]:
              - img [ref=e146]
              - paragraph [ref=e149]: Based on 3-year seasonal trend
          - button "View Deal" [active] [ref=e151] [cursor=pointer]:
            - text: View Deal
            - img [ref=e152]
        - article [ref=e154]:
          - generic [ref=e155]:
            - generic [ref=e156]:
              - generic [ref=e157]:
                - img [ref=e158]
                - text: "AI Confidence: 92%"
              - generic [ref=e168]:
                - img [ref=e169]
                - text: Rare deal. Sells out quickly.
            - heading "🏨 Marina Bay Sands dropped 15% for next weekend" [level=3] [ref=e172]
            - generic [ref=e173]:
              - img [ref=e174]
              - paragraph [ref=e177]: Historical flash sale pattern detected
          - button "View Deal" [ref=e179] [cursor=pointer]:
            - text: View Deal
            - img [ref=e180]
        - article [ref=e182]:
          - generic [ref=e183]:
            - generic [ref=e184]:
              - generic [ref=e185]:
                - img [ref=e186]
                - text: "AI Confidence: 76%"
              - generic [ref=e196]:
                - img [ref=e197]
                - text: Stable price. Book within 3 days.
            - heading "✈️ Jakarta → Tokyo flights are hitting 6-month lows" [level=3] [ref=e200]
            - generic [ref=e201]:
              - img [ref=e202]
              - paragraph [ref=e205]: New route capacity added by airlines
          - button "View Deal" [ref=e207] [cursor=pointer]:
            - text: View Deal
            - img [ref=e208]
    - generic [ref=e211]:
      - generic [ref=e212]:
        - generic [ref=e213]:
          - paragraph [ref=e214]: Live Deals
          - heading "Today's best picks" [level=2] [ref=e215]
        - generic [ref=e216]:
          - generic [ref=e217]: Rare Deal
          - generic [ref=e218]: Hot Deal
          - generic [ref=e219]: Good Deal
      - generic [ref=e220]:
        - generic [ref=e221]:
          - button "All Deals 12" [ref=e222] [cursor=pointer]:
            - img [ref=e223]
            - text: All Deals
            - generic [ref=e228]: "12"
          - button "Flights 6" [ref=e229] [cursor=pointer]:
            - img [ref=e230]
            - text: Flights
            - generic [ref=e232]: "6"
          - button "Hotels 6" [ref=e233] [cursor=pointer]:
            - img [ref=e234]
            - text: Hotels
            - generic [ref=e237]: "6"
        - generic [ref=e239]:
          - article [ref=e240] [cursor=pointer]:
            - generic [ref=e241]:
              - img "Jakarta → Bali" [ref=e243]
              - generic [ref=e245]: 42% OFF
              - generic [ref=e246]: Rare Deal
              - generic [ref=e247]:
                - generic [ref=e248]:
                  - img [ref=e249]
                  - text: CGK → DPS
                - heading "Jakarta → Bali" [level=3] [ref=e251]
            - generic [ref=e252]:
              - generic [ref=e254]:
                - generic [ref=e255]: Lion Air
                - generic [ref=e256]:
                  - img [ref=e257]
                  - text: 1h 30m
              - generic [ref=e261]:
                - img [ref=e262]
                - text: Booked 14 times today
              - generic [ref=e267]:
                - generic [ref=e268]:
                  - paragraph [ref=e269]: IDR 950K
                  - paragraph [ref=e271]: IDR 549K
                  - paragraph [ref=e272]: per person • via Traveloka
                - button "Book Now" [ref=e273]:
                  - generic [ref=e275]:
                    - text: Book Now
                    - img [ref=e276]
          - article [ref=e280] [cursor=pointer]:
            - generic [ref=e281]:
              - img "Jakarta → Singapore" [ref=e283]
              - generic [ref=e285]: 40% OFF
              - generic [ref=e286]: Last Seats
              - generic [ref=e287]:
                - generic [ref=e288]:
                  - img [ref=e289]
                  - text: CGK → SIN
                - heading "Jakarta → Singapore" [level=3] [ref=e291]
            - generic [ref=e292]:
              - generic [ref=e294]:
                - generic [ref=e295]: Garuda Indonesia
                - generic [ref=e296]:
                  - img [ref=e297]
                  - text: 2h 10m
              - generic [ref=e300]:
                - generic [ref=e301]:
                  - img [ref=e302]
                  - text: Only 1 seats left
                - generic [ref=e304]:
                  - img [ref=e305]
                  - text: Booked 106 times today
              - generic [ref=e310]:
                - generic [ref=e311]:
                  - paragraph [ref=e312]: IDR 2.1M
                  - paragraph [ref=e314]: IDR 1.3M
                  - paragraph [ref=e315]: per person • via Tiket.com
                - button "Book Now" [ref=e316]:
                  - generic [ref=e318]:
                    - text: Book Now
                    - img [ref=e319]
          - article [ref=e323] [cursor=pointer]:
            - generic [ref=e324]:
              - img "Jakarta → Bangkok" [ref=e326]
              - generic [ref=e328]: 31% OFF
              - generic [ref=e329]: Hot Deal
              - generic [ref=e330]:
                - generic [ref=e331]:
                  - img [ref=e332]
                  - text: CGK → BKK
                - heading "Jakarta → Bangkok" [level=3] [ref=e334]
            - generic [ref=e335]:
              - generic [ref=e337]:
                - generic [ref=e338]: AirAsia
                - generic [ref=e339]:
                  - img [ref=e340]
                  - text: 3h 30m
              - generic [ref=e344]:
                - img [ref=e345]
                - text: Booked 133 times today
              - generic [ref=e350]:
                - generic [ref=e351]:
                  - paragraph [ref=e352]: IDR 2.6M
                  - paragraph [ref=e354]: IDR 1.8M
                  - paragraph [ref=e355]: per person • via AirAsia
                - button "Book Now" [ref=e356]:
                  - generic [ref=e358]:
                    - text: Book Now
                    - img [ref=e359]
          - article [ref=e363] [cursor=pointer]:
            - generic [ref=e364]:
              - img "Jakarta → Kuala Lumpur" [ref=e366]
              - generic [ref=e368]: 41% OFF
              - generic [ref=e369]: Last Seats
              - generic [ref=e370]:
                - generic [ref=e371]:
                  - img [ref=e372]
                  - text: CGK → KUL
                - heading "Jakarta → Kuala Lumpur" [level=3] [ref=e374]
            - generic [ref=e375]:
              - generic [ref=e377]:
                - generic [ref=e378]: AirAsia
                - generic [ref=e379]:
                  - img [ref=e380]
                  - text: 2h 20m
              - generic [ref=e383]:
                - generic [ref=e384]:
                  - img [ref=e385]
                  - text: Only 5 seats left
                - generic [ref=e387]:
                  - img [ref=e388]
                  - text: Booked 128 times today
              - generic [ref=e393]:
                - generic [ref=e394]:
                  - paragraph [ref=e395]: IDR 1.5M
                  - paragraph [ref=e397]: IDR 890K
                  - paragraph [ref=e398]: per person • via AirAsia
                - button "Book Now" [ref=e399]:
                  - generic [ref=e401]:
                    - text: Book Now
                    - img [ref=e402]
          - article [ref=e406] [cursor=pointer]:
            - generic [ref=e407]:
              - img "Jakarta → Tokyo" [ref=e409]
              - generic [ref=e411]: 39% OFF
              - generic [ref=e412]: Rare Deal
              - generic [ref=e413]:
                - generic [ref=e414]:
                  - img [ref=e415]
                  - text: CGK → NRT
                - heading "Jakarta → Tokyo" [level=3] [ref=e417]
            - generic [ref=e418]:
              - generic [ref=e420]:
                - generic [ref=e421]: Garuda Indonesia
                - generic [ref=e422]:
                  - img [ref=e423]
                  - text: 7h 45m
              - generic [ref=e427]:
                - img [ref=e428]
                - text: Booked 97 times today
              - generic [ref=e433]:
                - generic [ref=e434]:
                  - paragraph [ref=e435]: IDR 8.5M
                  - paragraph [ref=e437]: IDR 5.2M
                  - paragraph [ref=e438]: per person • via Traveloka
                - button "Book Now" [ref=e439]:
                  - generic [ref=e441]:
                    - text: Book Now
                    - img [ref=e442]
          - article [ref=e446] [cursor=pointer]:
            - generic [ref=e447]:
              - img "Jakarta → Hong Kong" [ref=e449]
              - generic [ref=e451]: 40% OFF
              - generic [ref=e452]: Rare Deal
              - generic [ref=e453]:
                - generic [ref=e454]:
                  - img [ref=e455]
                  - text: CGK → HKG
                - heading "Jakarta → Hong Kong" [level=3] [ref=e457]
            - generic [ref=e458]:
              - generic [ref=e460]:
                - generic [ref=e461]: Cathay Pacific
                - generic [ref=e462]:
                  - img [ref=e463]
                  - text: 4h 30m
              - generic [ref=e467]:
                - img [ref=e468]
                - text: Booked 96 times today
              - generic [ref=e473]:
                - generic [ref=e474]:
                  - paragraph [ref=e475]: IDR 4.8M
                  - paragraph [ref=e477]: IDR 2.9M
                  - paragraph [ref=e478]: per person • via Tiket.com
                - button "Book Now" [ref=e479]:
                  - generic [ref=e481]:
                    - text: Book Now
                    - img [ref=e482]
          - article [ref=e486] [cursor=pointer]:
            - generic [ref=e487]:
              - img "The Mulia Bali" [ref=e489]
              - generic [ref=e491]: 40% OFF
              - generic [ref=e492]: Rare Deal
              - generic [ref=e493]:
                - generic [ref=e494]:
                  - img [ref=e495]
                  - text: Bali
                - heading "The Mulia Bali" [level=3] [ref=e498]
            - generic [ref=e499]:
              - generic [ref=e501]:
                - generic [ref=e502]:
                  - img [ref=e503]
                  - generic [ref=e505]: "9.4"
                - generic [ref=e506]: 2,847 reviews
              - generic [ref=e508]:
                - img [ref=e509]
                - text: Booked 99 times today
              - generic [ref=e514]:
                - generic [ref=e515]:
                  - paragraph [ref=e516]: IDR 3.5M
                  - paragraph [ref=e518]: IDR 2.1M
                  - paragraph [ref=e519]: per night • via Agoda
                - button "Book Now" [ref=e520]:
                  - generic [ref=e522]:
                    - text: Book Now
                    - img [ref=e523]
          - article [ref=e527] [cursor=pointer]:
            - generic [ref=e528]:
              - img "Capella Bangkok" [ref=e530]
              - generic [ref=e532]: 27% OFF
              - generic [ref=e533]: Hot Deal
              - generic [ref=e534]:
                - generic [ref=e535]:
                  - img [ref=e536]
                  - text: Bangkok
                - heading "Capella Bangkok" [level=3] [ref=e539]
            - generic [ref=e540]:
              - generic [ref=e542]:
                - generic [ref=e543]:
                  - img [ref=e544]
                  - generic [ref=e546]: "9.6"
                - generic [ref=e547]: 1,253 reviews
              - generic [ref=e549]:
                - img [ref=e550]
                - text: Booked 47 times today
              - generic [ref=e555]:
                - generic [ref=e556]:
                  - paragraph [ref=e557]: IDR 4.8M
                  - paragraph [ref=e559]: IDR 3.5M
                  - paragraph [ref=e560]: per night • via Booking.com
                - button "Book Now" [ref=e561]:
                  - generic [ref=e563]:
                    - text: Book Now
                    - img [ref=e564]
          - article [ref=e568] [cursor=pointer]:
            - generic [ref=e569]:
              - img "Marina Bay Sands" [ref=e571]
              - generic [ref=e573]: 19% OFF
              - generic [ref=e574]: Good Deal
              - generic [ref=e575]:
                - generic [ref=e576]:
                  - img [ref=e577]
                  - text: Singapore
                - heading "Marina Bay Sands" [level=3] [ref=e580]
            - generic [ref=e581]:
              - generic [ref=e583]:
                - generic [ref=e584]:
                  - img [ref=e585]
                  - generic [ref=e587]: "9.1"
                - generic [ref=e588]: 6,742 reviews
              - generic [ref=e590]:
                - img [ref=e591]
                - text: Booked 131 times today
              - generic [ref=e596]:
                - generic [ref=e597]:
                  - paragraph [ref=e598]: IDR 7.2M
                  - paragraph [ref=e600]: IDR 5.8M
                  - paragraph [ref=e601]: per night • via Agoda
                - button "Book Now" [ref=e602]:
                  - generic [ref=e604]:
                    - text: Book Now
                    - img [ref=e605]
          - article [ref=e609] [cursor=pointer]:
            - generic [ref=e610]:
              - img "COMO Uma Seminyak" [ref=e612]
              - generic [ref=e614]: 30% OFF
              - generic [ref=e615]: Hot Deal
              - generic [ref=e616]:
                - generic [ref=e617]:
                  - img [ref=e618]
                  - text: Bali
                - heading "COMO Uma Seminyak" [level=3] [ref=e621]
            - generic [ref=e622]:
              - generic [ref=e624]:
                - generic [ref=e625]:
                  - img [ref=e626]
                  - generic [ref=e628]: "9"
                - generic [ref=e629]: 980 reviews
              - generic [ref=e631]:
                - img [ref=e632]
                - text: Booked 106 times today
              - generic [ref=e637]:
                - generic [ref=e638]:
                  - paragraph [ref=e639]: IDR 2.5M
                  - paragraph [ref=e641]: IDR 1.8M
                  - paragraph [ref=e642]: per night • via Traveloka
                - button "Book Now" [ref=e643]:
                  - generic [ref=e645]:
                    - text: Book Now
                    - img [ref=e646]
          - article [ref=e650] [cursor=pointer]:
            - generic [ref=e651]:
              - img "The RuMa Kuala Lumpur" [ref=e653]
              - generic [ref=e655]: 36% OFF
              - generic [ref=e656]: Rare Deal
              - generic [ref=e657]:
                - generic [ref=e658]:
                  - img [ref=e659]
                  - text: Kuala Lumpur
                - heading "The RuMa Kuala Lumpur" [level=3] [ref=e662]
            - generic [ref=e663]:
              - generic [ref=e665]:
                - generic [ref=e666]:
                  - img [ref=e667]
                  - generic [ref=e669]: "9.3"
                - generic [ref=e670]: 752 reviews
              - generic [ref=e672]:
                - img [ref=e673]
                - text: Booked 91 times today
              - generic [ref=e678]:
                - generic [ref=e679]:
                  - paragraph [ref=e680]: IDR 2.2M
                  - paragraph [ref=e682]: IDR 1.4M
                  - paragraph [ref=e683]: per night • via Booking.com
                - button "Book Now" [ref=e684]:
                  - generic [ref=e686]:
                    - text: Book Now
                    - img [ref=e687]
          - article [ref=e691] [cursor=pointer]:
            - generic [ref=e692]:
              - img "Park Hyatt Tokyo" [ref=e694]
              - generic [ref=e696]: 31% OFF
              - generic [ref=e697]: Hot Deal
              - generic [ref=e698]:
                - generic [ref=e699]:
                  - img [ref=e700]
                  - text: Tokyo
                - heading "Park Hyatt Tokyo" [level=3] [ref=e703]
            - generic [ref=e704]:
              - generic [ref=e706]:
                - generic [ref=e707]:
                  - img [ref=e708]
                  - generic [ref=e710]: "9.7"
                - generic [ref=e711]: 2,156 reviews
              - generic [ref=e713]:
                - img [ref=e714]
                - text: Booked 75 times today
              - generic [ref=e719]:
                - generic [ref=e720]:
                  - paragraph [ref=e721]: IDR 9M
                  - paragraph [ref=e723]: IDR 6.2M
                  - paragraph [ref=e724]: per night • via Agoda
                - button "Book Now" [ref=e725]:
                  - generic [ref=e727]:
                    - text: Book Now
                    - img [ref=e728]
    - generic [ref=e733]:
      - generic [ref=e735]:
        - img [ref=e737]
        - generic [ref=e739]:
          - generic [ref=e740]:
            - text: 4.8/5
            - generic [ref=e741]:
              - img [ref=e742]
              - img [ref=e744]
              - img [ref=e746]
              - img [ref=e748]
              - img [ref=e750]
          - paragraph [ref=e752]: from 10,000+ authentic users
      - generic [ref=e754]:
        - generic [ref=e755]:
          - generic [ref=e756]:
            - img "Sarah Jen" [ref=e758]
            - generic [ref=e759]:
              - heading "Sarah Jen" [level=4] [ref=e760]
              - paragraph [ref=e761]: Frequent Traveler
          - paragraph [ref=e762]: “This app saved me 2 million IDR on my Japan trip. I booked a flash deal that wasn’t even showing up on other sites.”
        - generic [ref=e763]:
          - generic [ref=e764]:
            - img "Michael T." [ref=e766]
            - generic [ref=e767]:
              - heading "Michael T." [level=4] [ref=e768]
              - paragraph [ref=e769]: Digital Nomad
          - paragraph [ref=e770]: “The AI Insight feed is a game changer. I set my budget and it told me exactly when the Marina Bay Sands prices dropped.”
        - generic [ref=e771]:
          - generic [ref=e772]:
            - img "Elena R." [ref=e774]
            - generic [ref=e775]:
              - heading "Elena R." [level=4] [ref=e776]
              - paragraph [ref=e777]: Family Vacationer
          - paragraph [ref=e778]: “I used to spend hours comparing flights. Lelungo does it instantly and the “Rare Deal” tag is incredibly accurate.”
        - generic [ref=e779]:
          - generic [ref=e780]:
            - img "David K." [ref=e782]
            - generic [ref=e783]:
              - heading "David K." [level=4] [ref=e784]
              - paragraph [ref=e785]: Business Consultant
          - paragraph [ref=e786]: “Clean interface, zero ads, and straight to the point. It’s like having a private travel agent in my pocket.”
        - generic [ref=e787]:
          - generic [ref=e788]:
            - img "Amanda S." [ref=e790]
            - generic [ref=e791]:
              - heading "Amanda S." [level=4] [ref=e792]
              - paragraph [ref=e793]: Backpacker
          - paragraph [ref=e794]: “Booked my flights to Bangkok exactly when it hit a 6-month low. Unbelievable tool for budget travelers.”
        - generic [ref=e795]:
          - generic [ref=e796]:
            - img "Sarah Jen" [ref=e798]
            - generic [ref=e799]:
              - heading "Sarah Jen" [level=4] [ref=e800]
              - paragraph [ref=e801]: Frequent Traveler
          - paragraph [ref=e802]: “This app saved me 2 million IDR on my Japan trip. I booked a flash deal that wasn’t even showing up on other sites.”
        - generic [ref=e803]:
          - generic [ref=e804]:
            - img "Michael T." [ref=e806]
            - generic [ref=e807]:
              - heading "Michael T." [level=4] [ref=e808]
              - paragraph [ref=e809]: Digital Nomad
          - paragraph [ref=e810]: “The AI Insight feed is a game changer. I set my budget and it told me exactly when the Marina Bay Sands prices dropped.”
        - generic [ref=e811]:
          - generic [ref=e812]:
            - img "Elena R." [ref=e814]
            - generic [ref=e815]:
              - heading "Elena R." [level=4] [ref=e816]
              - paragraph [ref=e817]: Family Vacationer
          - paragraph [ref=e818]: “I used to spend hours comparing flights. Lelungo does it instantly and the “Rare Deal” tag is incredibly accurate.”
        - generic [ref=e819]:
          - generic [ref=e820]:
            - img "David K." [ref=e822]
            - generic [ref=e823]:
              - heading "David K." [level=4] [ref=e824]
              - paragraph [ref=e825]: Business Consultant
          - paragraph [ref=e826]: “Clean interface, zero ads, and straight to the point. It’s like having a private travel agent in my pocket.”
        - generic [ref=e827]:
          - generic [ref=e828]:
            - img "Amanda S." [ref=e830]
            - generic [ref=e831]:
              - heading "Amanda S." [level=4] [ref=e832]
              - paragraph [ref=e833]: Backpacker
          - paragraph [ref=e834]: “Booked my flights to Bangkok exactly when it hit a 6-month low. Unbelievable tool for budget travelers.”
    - generic [ref=e837]:
      - img [ref=e838]
      - heading "Never miss a Rare Deal" [level=2] [ref=e840]
      - paragraph [ref=e841]: Our insight engine tags the top 5% of deals as “Rare” — these sell out within hours. Check back daily.
      - button "Explore Deals Now" [ref=e842] [cursor=pointer]
  - contentinfo [ref=e843]:
    - generic [ref=e844]:
      - generic [ref=e845]:
        - generic [ref=e846]:
          - link "Lelungo" [ref=e847] [cursor=pointer]:
            - /url: /
            - img [ref=e849]
            - generic [ref=e851]: Lelungo
          - paragraph [ref=e852]: Discover hidden travel deals before everyone else. Smart insights for smarter trips.
        - generic [ref=e853]:
          - heading "Product" [level=4] [ref=e854]
          - link "Explore Deals" [ref=e855] [cursor=pointer]:
            - /url: /
          - link "Flights" [ref=e856] [cursor=pointer]:
            - /url: /?filter=flight
          - link "Hotels" [ref=e857] [cursor=pointer]:
            - /url: /?filter=hotel
          - link "AI Insights" [ref=e858] [cursor=pointer]:
            - /url: /dashboard
        - generic [ref=e859]:
          - heading "Company" [level=4] [ref=e860]
          - link "About Us" [ref=e861] [cursor=pointer]:
            - /url: "#"
          - link "Careers" [ref=e862] [cursor=pointer]:
            - /url: "#"
          - link "Privacy Policy" [ref=e863] [cursor=pointer]:
            - /url: "#"
          - link "Terms of Service" [ref=e864] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e865]:
          - heading "Follow Us" [level=4] [ref=e866]
          - generic [ref=e867]:
            - link [ref=e868] [cursor=pointer]:
              - /url: "#"
              - img [ref=e869]
            - link [ref=e871] [cursor=pointer]:
              - /url: "#"
              - img [ref=e872]
            - link [ref=e875] [cursor=pointer]:
              - /url: "#"
              - img [ref=e876]
      - generic [ref=e878]:
        - paragraph [ref=e879]: © 2026 Lelungo. All rights reserved.
        - generic [ref=e880]:
          - generic [ref=e881]: Jakarta, ID
          - generic [ref=e883]: Operational
  - alert [ref=e884]
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { test as baseTest } from '@playwright/test';
  3  | 
  4  | /**
  5  |  * Defensive test fixture setup.
  6  |  * - Automatically throws if there's a console error or warning about hydration.
  7  |  * - Disables CSS animations globally for stability.
  8  |  */
  9  | export const test = baseTest.extend({
  10 |   page: async ({ page }, use) => {
  11 |     const errors: string[] = [];
  12 | 
  13 |     // Catch all page uncaught exceptions
  14 |     page.on('pageerror', (exception) => {
  15 |       errors.push(`PageError: ${exception.message}`);
  16 |     });
  17 | 
  18 |     // Catch specific console errors (like hydration)
  19 |     page.on('console', (msg) => {
  20 |       if (msg.type() === 'error') {
  21 |         const text = msg.text();
  22 |         // Ignore specific harmless warnings if needed, else push all
  23 |         if (
  24 |           !text.includes('404') && 
  25 |           !text.includes('Failed to load resource') &&
  26 |           !text.includes('favicon.ico')
  27 |         ) {
  28 |           errors.push(`Console Error: ${text}`);
  29 |         }
  30 |       }
  31 |     });
  32 | 
  33 |     // Disable all CSS animations and transitions for testing stability
  34 |     await page.addInitScript(() => {
  35 |       const style = document.createElement('style');
  36 |       style.textContent = `
  37 |         *, *::before, *::after {
  38 |           transition: none !important;
  39 |           animation: none !important;
  40 |         }
  41 |       `;
  42 |       document.head.appendChild(style);
  43 |     });
  44 | 
  45 |     await use(page);
  46 | 
  47 |     // After test ends, assert no errors were caught
  48 |     if (errors.length > 0) {
> 49 |       throw new Error(`Test failed due to caught errors:\n${errors.join('\n')}`);
     |             ^ Error: Test failed due to caught errors:
  50 |     }
  51 |   },
  52 | });
  53 | 
  54 | /**
  55 |  * Ensures the UI is stable by waiting for the network to be idle
  56 |  * and checking for common UI placeholders or loaders to disappear.
  57 |  */
  58 | export async function waitForStableUI(page: Page) {
  59 |   // Wait for all network requests to finish
  60 |   await page.waitForLoadState('networkidle');
  61 |   
  62 |   // Optional: If there's a global loader, wait for it to be hidden
  63 |   // e.g. await expect(page.locator('.loader')).toBeHidden();
  64 | }
  65 | 
```