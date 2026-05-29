# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: interactions.spec.ts >> Interactions >> Dark Mode Toggle
- Location: tests\e2e\interactions.spec.ts:64:7

# Error details

```
Error: Test failed due to caught errors:
PageError: Cannot read properties of null (reading 'appendChild')
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Lelungo" [ref=e4] [cursor=pointer]:
        - /url: /
        - img [ref=e6]
        - generic [ref=e8]: Lelungo
      - generic [ref=e9]:
        - navigation [ref=e10]:
          - link "Explore" [ref=e11] [cursor=pointer]:
            - /url: /
          - link "Dashboard" [ref=e12] [cursor=pointer]:
            - /url: /dashboard
            - img [ref=e13]
            - text: Dashboard
        - button "Toggle theme" [active] [ref=e15] [cursor=pointer]:
          - img [ref=e16]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e25]:
        - generic [ref=e26]: 🔥
        - generic [ref=e27]:
          - paragraph [ref=e28]: AI Suggestion
          - paragraph [ref=e29]: Flights to Tokyo dropped 32% today
      - generic [ref=e30]:
        - generic [ref=e31]:
          - img [ref=e32]
          - generic [ref=e34]: Smart Deal Engine — Real-time tracking
        - heading "Find Hidden Travel Deals Before Everyone Else." [level=1] [ref=e35]:
          - text: Find Hidden Travel Deals
          - text: Before Everyone Else.
        - paragraph [ref=e36]: AI-powered insights for smarter trips. We scan thousands of sources to score the true value of every flight and hotel.
        - generic [ref=e39]:
          - generic [ref=e40]:
            - img [ref=e42]
            - generic [ref=e45]:
              - generic [ref=e46]: From
              - textbox "From" [ref=e47]:
                - /placeholder: Jakarta (CGK)
          - generic [ref=e49]:
            - img [ref=e51]
            - generic [ref=e54]:
              - generic [ref=e55]: To
              - textbox "To" [ref=e56]:
                - /placeholder: Tokyo (NRT)
          - generic [ref=e58]:
            - img [ref=e60]
            - generic [ref=e62]:
              - generic [ref=e63]: Date
              - textbox "Date" [ref=e64]:
                - /placeholder: Add dates
          - generic [ref=e66]:
            - img [ref=e68]
            - generic [ref=e70]:
              - generic [ref=e71]: Budget
              - textbox "Budget" [ref=e72]:
                - /placeholder: Optional max
          - button "Search Deals" [ref=e74] [cursor=pointer]:
            - img [ref=e76]
            - generic [ref=e79]: Search Deals
        - generic [ref=e80]:
          - generic [ref=e81]:
            - img [ref=e82]
            - generic [ref=e87]: 10,000+ users
          - generic [ref=e89]:
            - img [ref=e90]
            - generic [ref=e93]: AI verified deals
    - generic [ref=e95]:
      - generic [ref=e96]:
        - paragraph [ref=e97]: How it works
        - heading "Deal intelligence, not just listings" [level=2] [ref=e98]
      - generic [ref=e99]:
        - generic [ref=e100]:
          - img [ref=e102]
          - paragraph [ref=e105]: STEP 1
          - heading "We aggregate deals" [level=3] [ref=e106]
          - paragraph [ref=e107]: Pulls live prices from Traveloka, Agoda, Tiket.com, AirAsia, Booking.com.
        - generic [ref=e108]:
          - img [ref=e110]
          - paragraph [ref=e113]: STEP 2
          - heading "Insight engine scores them" [level=3] [ref=e114]
          - paragraph [ref=e115]: "Each deal gets tagged: Rare Deal, Hot Deal, Good Deal, or Fair Price — based on historical prices."
        - generic [ref=e116]:
          - img [ref=e118]
          - paragraph [ref=e120]: STEP 3
          - heading "You book in one click" [level=3] [ref=e121]
          - paragraph [ref=e122]: Click View Deal, we track your click, and send you straight to the partner booking page.
    - generic [ref=e123]:
      - generic [ref=e124]:
        - paragraph [ref=e125]: Live Feed
        - heading "AI Travel Insights" [level=2] [ref=e126]
        - paragraph [ref=e127]: Our engine scans millions of data points to find anomalies.
      - generic [ref=e128]:
        - article [ref=e129]:
          - generic [ref=e130]:
            - generic [ref=e131]:
              - generic [ref=e132]:
                - img [ref=e133]
                - text: "AI Confidence: 87%"
              - generic [ref=e143]:
                - img [ref=e144]
                - text: Price may rise in 6 hours
            - heading "✈️ Jakarta → Singapore now 28% cheaper" [level=3] [ref=e147]
            - generic [ref=e148]:
              - img [ref=e149]
              - paragraph [ref=e152]: Based on 3-year seasonal trend
          - button "View Deal" [ref=e154] [cursor=pointer]:
            - text: View Deal
            - img [ref=e155]
        - article [ref=e157]:
          - generic [ref=e158]:
            - generic [ref=e159]:
              - generic [ref=e160]:
                - img [ref=e161]
                - text: "AI Confidence: 92%"
              - generic [ref=e171]:
                - img [ref=e172]
                - text: Rare deal. Sells out quickly.
            - heading "🏨 Marina Bay Sands dropped 15% for next weekend" [level=3] [ref=e175]
            - generic [ref=e176]:
              - img [ref=e177]
              - paragraph [ref=e180]: Historical flash sale pattern detected
          - button "View Deal" [ref=e182] [cursor=pointer]:
            - text: View Deal
            - img [ref=e183]
        - article [ref=e185]:
          - generic [ref=e186]:
            - generic [ref=e187]:
              - generic [ref=e188]:
                - img [ref=e189]
                - text: "AI Confidence: 76%"
              - generic [ref=e199]:
                - img [ref=e200]
                - text: Stable price. Book within 3 days.
            - heading "✈️ Jakarta → Tokyo flights are hitting 6-month lows" [level=3] [ref=e203]
            - generic [ref=e204]:
              - img [ref=e205]
              - paragraph [ref=e208]: New route capacity added by airlines
          - button "View Deal" [ref=e210] [cursor=pointer]:
            - text: View Deal
            - img [ref=e211]
    - generic [ref=e214]:
      - generic [ref=e215]:
        - generic [ref=e216]:
          - paragraph [ref=e217]: Live Deals
          - heading "Today's best picks" [level=2] [ref=e218]
        - generic [ref=e219]:
          - generic [ref=e220]: Rare Deal
          - generic [ref=e221]: Hot Deal
          - generic [ref=e222]: Good Deal
      - generic [ref=e223]:
        - generic [ref=e224]:
          - button "All Deals 12" [ref=e225] [cursor=pointer]:
            - img [ref=e226]
            - text: All Deals
            - generic [ref=e231]: "12"
          - button "Flights 6" [ref=e232] [cursor=pointer]:
            - img [ref=e233]
            - text: Flights
            - generic [ref=e235]: "6"
          - button "Hotels 6" [ref=e236] [cursor=pointer]:
            - img [ref=e237]
            - text: Hotels
            - generic [ref=e240]: "6"
        - generic [ref=e242]:
          - article [ref=e243] [cursor=pointer]:
            - generic [ref=e244]:
              - img "Jakarta → Bali" [ref=e246]
              - generic [ref=e248]: 42% OFF
              - generic [ref=e249]: Rare Deal
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - img [ref=e252]
                  - text: CGK → DPS
                - heading "Jakarta → Bali" [level=3] [ref=e254]
            - generic [ref=e255]:
              - generic [ref=e257]:
                - generic [ref=e258]: Lion Air
                - generic [ref=e259]:
                  - img [ref=e260]
                  - text: 1h 30m
              - generic [ref=e264]:
                - img [ref=e265]
                - text: Booked 14 times today
              - generic [ref=e270]:
                - generic [ref=e271]:
                  - paragraph [ref=e272]: IDR 950K
                  - paragraph [ref=e274]: IDR 549K
                  - paragraph [ref=e275]: per person • via Traveloka
                - button "Book Now" [ref=e276]:
                  - generic [ref=e278]:
                    - text: Book Now
                    - img [ref=e279]
          - article [ref=e283] [cursor=pointer]:
            - generic [ref=e284]:
              - img "Jakarta → Singapore" [ref=e286]
              - generic [ref=e288]: 40% OFF
              - generic [ref=e289]: Last Seats
              - generic [ref=e290]:
                - generic [ref=e291]:
                  - img [ref=e292]
                  - text: CGK → SIN
                - heading "Jakarta → Singapore" [level=3] [ref=e294]
            - generic [ref=e295]:
              - generic [ref=e297]:
                - generic [ref=e298]: Garuda Indonesia
                - generic [ref=e299]:
                  - img [ref=e300]
                  - text: 2h 10m
              - generic [ref=e303]:
                - generic [ref=e304]:
                  - img [ref=e305]
                  - text: Only 1 seats left
                - generic [ref=e307]:
                  - img [ref=e308]
                  - text: Booked 106 times today
              - generic [ref=e313]:
                - generic [ref=e314]:
                  - paragraph [ref=e315]: IDR 2.1M
                  - paragraph [ref=e317]: IDR 1.3M
                  - paragraph [ref=e318]: per person • via Tiket.com
                - button "Book Now" [ref=e319]:
                  - generic [ref=e321]:
                    - text: Book Now
                    - img [ref=e322]
          - article [ref=e326] [cursor=pointer]:
            - generic [ref=e327]:
              - img "Jakarta → Bangkok" [ref=e329]
              - generic [ref=e331]: 31% OFF
              - generic [ref=e332]: Hot Deal
              - generic [ref=e333]:
                - generic [ref=e334]:
                  - img [ref=e335]
                  - text: CGK → BKK
                - heading "Jakarta → Bangkok" [level=3] [ref=e337]
            - generic [ref=e338]:
              - generic [ref=e340]:
                - generic [ref=e341]: AirAsia
                - generic [ref=e342]:
                  - img [ref=e343]
                  - text: 3h 30m
              - generic [ref=e347]:
                - img [ref=e348]
                - text: Booked 133 times today
              - generic [ref=e353]:
                - generic [ref=e354]:
                  - paragraph [ref=e355]: IDR 2.6M
                  - paragraph [ref=e357]: IDR 1.8M
                  - paragraph [ref=e358]: per person • via AirAsia
                - button "Book Now" [ref=e359]:
                  - generic [ref=e361]:
                    - text: Book Now
                    - img [ref=e362]
          - article [ref=e366] [cursor=pointer]:
            - generic [ref=e367]:
              - img "Jakarta → Kuala Lumpur" [ref=e369]
              - generic [ref=e371]: 41% OFF
              - generic [ref=e372]: Last Seats
              - generic [ref=e373]:
                - generic [ref=e374]:
                  - img [ref=e375]
                  - text: CGK → KUL
                - heading "Jakarta → Kuala Lumpur" [level=3] [ref=e377]
            - generic [ref=e378]:
              - generic [ref=e380]:
                - generic [ref=e381]: AirAsia
                - generic [ref=e382]:
                  - img [ref=e383]
                  - text: 2h 20m
              - generic [ref=e386]:
                - generic [ref=e387]:
                  - img [ref=e388]
                  - text: Only 5 seats left
                - generic [ref=e390]:
                  - img [ref=e391]
                  - text: Booked 128 times today
              - generic [ref=e396]:
                - generic [ref=e397]:
                  - paragraph [ref=e398]: IDR 1.5M
                  - paragraph [ref=e400]: IDR 890K
                  - paragraph [ref=e401]: per person • via AirAsia
                - button "Book Now" [ref=e402]:
                  - generic [ref=e404]:
                    - text: Book Now
                    - img [ref=e405]
          - article [ref=e409] [cursor=pointer]:
            - generic [ref=e410]:
              - img "Jakarta → Tokyo" [ref=e412]
              - generic [ref=e414]: 39% OFF
              - generic [ref=e415]: Rare Deal
              - generic [ref=e416]:
                - generic [ref=e417]:
                  - img [ref=e418]
                  - text: CGK → NRT
                - heading "Jakarta → Tokyo" [level=3] [ref=e420]
            - generic [ref=e421]:
              - generic [ref=e423]:
                - generic [ref=e424]: Garuda Indonesia
                - generic [ref=e425]:
                  - img [ref=e426]
                  - text: 7h 45m
              - generic [ref=e430]:
                - img [ref=e431]
                - text: Booked 97 times today
              - generic [ref=e436]:
                - generic [ref=e437]:
                  - paragraph [ref=e438]: IDR 8.5M
                  - paragraph [ref=e440]: IDR 5.2M
                  - paragraph [ref=e441]: per person • via Traveloka
                - button "Book Now" [ref=e442]:
                  - generic [ref=e444]:
                    - text: Book Now
                    - img [ref=e445]
          - article [ref=e449] [cursor=pointer]:
            - generic [ref=e450]:
              - img "Jakarta → Hong Kong" [ref=e452]
              - generic [ref=e454]: 40% OFF
              - generic [ref=e455]: Rare Deal
              - generic [ref=e456]:
                - generic [ref=e457]:
                  - img [ref=e458]
                  - text: CGK → HKG
                - heading "Jakarta → Hong Kong" [level=3] [ref=e460]
            - generic [ref=e461]:
              - generic [ref=e463]:
                - generic [ref=e464]: Cathay Pacific
                - generic [ref=e465]:
                  - img [ref=e466]
                  - text: 4h 30m
              - generic [ref=e470]:
                - img [ref=e471]
                - text: Booked 96 times today
              - generic [ref=e476]:
                - generic [ref=e477]:
                  - paragraph [ref=e478]: IDR 4.8M
                  - paragraph [ref=e480]: IDR 2.9M
                  - paragraph [ref=e481]: per person • via Tiket.com
                - button "Book Now" [ref=e482]:
                  - generic [ref=e484]:
                    - text: Book Now
                    - img [ref=e485]
          - article [ref=e489] [cursor=pointer]:
            - generic [ref=e490]:
              - img "The Mulia Bali" [ref=e492]
              - generic [ref=e494]: 40% OFF
              - generic [ref=e495]: Rare Deal
              - generic [ref=e496]:
                - generic [ref=e497]:
                  - img [ref=e498]
                  - text: Bali
                - heading "The Mulia Bali" [level=3] [ref=e501]
            - generic [ref=e502]:
              - generic [ref=e504]:
                - generic [ref=e505]:
                  - img [ref=e506]
                  - generic [ref=e508]: "9.4"
                - generic [ref=e509]: 2,847 reviews
              - generic [ref=e511]:
                - img [ref=e512]
                - text: Booked 99 times today
              - generic [ref=e517]:
                - generic [ref=e518]:
                  - paragraph [ref=e519]: IDR 3.5M
                  - paragraph [ref=e521]: IDR 2.1M
                  - paragraph [ref=e522]: per night • via Agoda
                - button "Book Now" [ref=e523]:
                  - generic [ref=e525]:
                    - text: Book Now
                    - img [ref=e526]
          - article [ref=e530] [cursor=pointer]:
            - generic [ref=e531]:
              - img "Capella Bangkok" [ref=e533]
              - generic [ref=e535]: 27% OFF
              - generic [ref=e536]: Hot Deal
              - generic [ref=e537]:
                - generic [ref=e538]:
                  - img [ref=e539]
                  - text: Bangkok
                - heading "Capella Bangkok" [level=3] [ref=e542]
            - generic [ref=e543]:
              - generic [ref=e545]:
                - generic [ref=e546]:
                  - img [ref=e547]
                  - generic [ref=e549]: "9.6"
                - generic [ref=e550]: 1,253 reviews
              - generic [ref=e552]:
                - img [ref=e553]
                - text: Booked 47 times today
              - generic [ref=e558]:
                - generic [ref=e559]:
                  - paragraph [ref=e560]: IDR 4.8M
                  - paragraph [ref=e562]: IDR 3.5M
                  - paragraph [ref=e563]: per night • via Booking.com
                - button "Book Now" [ref=e564]:
                  - generic [ref=e566]:
                    - text: Book Now
                    - img [ref=e567]
          - article [ref=e571] [cursor=pointer]:
            - generic [ref=e572]:
              - img "Marina Bay Sands" [ref=e574]
              - generic [ref=e576]: 19% OFF
              - generic [ref=e577]: Good Deal
              - generic [ref=e578]:
                - generic [ref=e579]:
                  - img [ref=e580]
                  - text: Singapore
                - heading "Marina Bay Sands" [level=3] [ref=e583]
            - generic [ref=e584]:
              - generic [ref=e586]:
                - generic [ref=e587]:
                  - img [ref=e588]
                  - generic [ref=e590]: "9.1"
                - generic [ref=e591]: 6,742 reviews
              - generic [ref=e593]:
                - img [ref=e594]
                - text: Booked 131 times today
              - generic [ref=e599]:
                - generic [ref=e600]:
                  - paragraph [ref=e601]: IDR 7.2M
                  - paragraph [ref=e603]: IDR 5.8M
                  - paragraph [ref=e604]: per night • via Agoda
                - button "Book Now" [ref=e605]:
                  - generic [ref=e607]:
                    - text: Book Now
                    - img [ref=e608]
          - article [ref=e612] [cursor=pointer]:
            - generic [ref=e613]:
              - img "COMO Uma Seminyak" [ref=e615]
              - generic [ref=e617]: 30% OFF
              - generic [ref=e618]: Hot Deal
              - generic [ref=e619]:
                - generic [ref=e620]:
                  - img [ref=e621]
                  - text: Bali
                - heading "COMO Uma Seminyak" [level=3] [ref=e624]
            - generic [ref=e625]:
              - generic [ref=e627]:
                - generic [ref=e628]:
                  - img [ref=e629]
                  - generic [ref=e631]: "9"
                - generic [ref=e632]: 980 reviews
              - generic [ref=e634]:
                - img [ref=e635]
                - text: Booked 106 times today
              - generic [ref=e640]:
                - generic [ref=e641]:
                  - paragraph [ref=e642]: IDR 2.5M
                  - paragraph [ref=e644]: IDR 1.8M
                  - paragraph [ref=e645]: per night • via Traveloka
                - button "Book Now" [ref=e646]:
                  - generic [ref=e648]:
                    - text: Book Now
                    - img [ref=e649]
          - article [ref=e653] [cursor=pointer]:
            - generic [ref=e654]:
              - img "The RuMa Kuala Lumpur" [ref=e656]
              - generic [ref=e658]: 36% OFF
              - generic [ref=e659]: Rare Deal
              - generic [ref=e660]:
                - generic [ref=e661]:
                  - img [ref=e662]
                  - text: Kuala Lumpur
                - heading "The RuMa Kuala Lumpur" [level=3] [ref=e665]
            - generic [ref=e666]:
              - generic [ref=e668]:
                - generic [ref=e669]:
                  - img [ref=e670]
                  - generic [ref=e672]: "9.3"
                - generic [ref=e673]: 752 reviews
              - generic [ref=e675]:
                - img [ref=e676]
                - text: Booked 91 times today
              - generic [ref=e681]:
                - generic [ref=e682]:
                  - paragraph [ref=e683]: IDR 2.2M
                  - paragraph [ref=e685]: IDR 1.4M
                  - paragraph [ref=e686]: per night • via Booking.com
                - button "Book Now" [ref=e687]:
                  - generic [ref=e689]:
                    - text: Book Now
                    - img [ref=e690]
          - article [ref=e694] [cursor=pointer]:
            - generic [ref=e695]:
              - img "Park Hyatt Tokyo" [ref=e697]
              - generic [ref=e699]: 31% OFF
              - generic [ref=e700]: Hot Deal
              - generic [ref=e701]:
                - generic [ref=e702]:
                  - img [ref=e703]
                  - text: Tokyo
                - heading "Park Hyatt Tokyo" [level=3] [ref=e706]
            - generic [ref=e707]:
              - generic [ref=e709]:
                - generic [ref=e710]:
                  - img [ref=e711]
                  - generic [ref=e713]: "9.7"
                - generic [ref=e714]: 2,156 reviews
              - generic [ref=e716]:
                - img [ref=e717]
                - text: Booked 75 times today
              - generic [ref=e722]:
                - generic [ref=e723]:
                  - paragraph [ref=e724]: IDR 9M
                  - paragraph [ref=e726]: IDR 6.2M
                  - paragraph [ref=e727]: per night • via Agoda
                - button "Book Now" [ref=e728]:
                  - generic [ref=e730]:
                    - text: Book Now
                    - img [ref=e731]
    - generic [ref=e736]:
      - generic [ref=e738]:
        - img [ref=e740]
        - generic [ref=e742]:
          - generic [ref=e743]:
            - text: 4.8/5
            - generic [ref=e744]:
              - img [ref=e745]
              - img [ref=e747]
              - img [ref=e749]
              - img [ref=e751]
              - img [ref=e753]
          - paragraph [ref=e755]: from 10,000+ authentic users
      - generic [ref=e757]:
        - generic [ref=e758]:
          - generic [ref=e759]:
            - img "Sarah Jen" [ref=e761]
            - generic [ref=e762]:
              - heading "Sarah Jen" [level=4] [ref=e763]
              - paragraph [ref=e764]: Frequent Traveler
          - paragraph [ref=e765]: “This app saved me 2 million IDR on my Japan trip. I booked a flash deal that wasn’t even showing up on other sites.”
        - generic [ref=e766]:
          - generic [ref=e767]:
            - img "Michael T." [ref=e769]
            - generic [ref=e770]:
              - heading "Michael T." [level=4] [ref=e771]
              - paragraph [ref=e772]: Digital Nomad
          - paragraph [ref=e773]: “The AI Insight feed is a game changer. I set my budget and it told me exactly when the Marina Bay Sands prices dropped.”
        - generic [ref=e774]:
          - generic [ref=e775]:
            - img "Elena R." [ref=e777]
            - generic [ref=e778]:
              - heading "Elena R." [level=4] [ref=e779]
              - paragraph [ref=e780]: Family Vacationer
          - paragraph [ref=e781]: “I used to spend hours comparing flights. Lelungo does it instantly and the “Rare Deal” tag is incredibly accurate.”
        - generic [ref=e782]:
          - generic [ref=e783]:
            - img "David K." [ref=e785]
            - generic [ref=e786]:
              - heading "David K." [level=4] [ref=e787]
              - paragraph [ref=e788]: Business Consultant
          - paragraph [ref=e789]: “Clean interface, zero ads, and straight to the point. It’s like having a private travel agent in my pocket.”
        - generic [ref=e790]:
          - generic [ref=e791]:
            - img "Amanda S." [ref=e793]
            - generic [ref=e794]:
              - heading "Amanda S." [level=4] [ref=e795]
              - paragraph [ref=e796]: Backpacker
          - paragraph [ref=e797]: “Booked my flights to Bangkok exactly when it hit a 6-month low. Unbelievable tool for budget travelers.”
        - generic [ref=e798]:
          - generic [ref=e799]:
            - img "Sarah Jen" [ref=e801]
            - generic [ref=e802]:
              - heading "Sarah Jen" [level=4] [ref=e803]
              - paragraph [ref=e804]: Frequent Traveler
          - paragraph [ref=e805]: “This app saved me 2 million IDR on my Japan trip. I booked a flash deal that wasn’t even showing up on other sites.”
        - generic [ref=e806]:
          - generic [ref=e807]:
            - img "Michael T." [ref=e809]
            - generic [ref=e810]:
              - heading "Michael T." [level=4] [ref=e811]
              - paragraph [ref=e812]: Digital Nomad
          - paragraph [ref=e813]: “The AI Insight feed is a game changer. I set my budget and it told me exactly when the Marina Bay Sands prices dropped.”
        - generic [ref=e814]:
          - generic [ref=e815]:
            - img "Elena R." [ref=e817]
            - generic [ref=e818]:
              - heading "Elena R." [level=4] [ref=e819]
              - paragraph [ref=e820]: Family Vacationer
          - paragraph [ref=e821]: “I used to spend hours comparing flights. Lelungo does it instantly and the “Rare Deal” tag is incredibly accurate.”
        - generic [ref=e822]:
          - generic [ref=e823]:
            - img "David K." [ref=e825]
            - generic [ref=e826]:
              - heading "David K." [level=4] [ref=e827]
              - paragraph [ref=e828]: Business Consultant
          - paragraph [ref=e829]: “Clean interface, zero ads, and straight to the point. It’s like having a private travel agent in my pocket.”
        - generic [ref=e830]:
          - generic [ref=e831]:
            - img "Amanda S." [ref=e833]
            - generic [ref=e834]:
              - heading "Amanda S." [level=4] [ref=e835]
              - paragraph [ref=e836]: Backpacker
          - paragraph [ref=e837]: “Booked my flights to Bangkok exactly when it hit a 6-month low. Unbelievable tool for budget travelers.”
    - generic [ref=e840]:
      - img [ref=e841]
      - heading "Never miss a Rare Deal" [level=2] [ref=e843]
      - paragraph [ref=e844]: Our insight engine tags the top 5% of deals as “Rare” — these sell out within hours. Check back daily.
      - button "Explore Deals Now" [ref=e845] [cursor=pointer]
  - contentinfo [ref=e846]:
    - generic [ref=e847]:
      - generic [ref=e848]:
        - generic [ref=e849]:
          - link "Lelungo" [ref=e850] [cursor=pointer]:
            - /url: /
            - img [ref=e852]
            - generic [ref=e854]: Lelungo
          - paragraph [ref=e855]: Discover hidden travel deals before everyone else. Smart insights for smarter trips.
        - generic [ref=e856]:
          - heading "Product" [level=4] [ref=e857]
          - link "Explore Deals" [ref=e858] [cursor=pointer]:
            - /url: /
          - link "Flights" [ref=e859] [cursor=pointer]:
            - /url: /?filter=flight
          - link "Hotels" [ref=e860] [cursor=pointer]:
            - /url: /?filter=hotel
          - link "AI Insights" [ref=e861] [cursor=pointer]:
            - /url: /dashboard
        - generic [ref=e862]:
          - heading "Company" [level=4] [ref=e863]
          - link "About Us" [ref=e864] [cursor=pointer]:
            - /url: "#"
          - link "Careers" [ref=e865] [cursor=pointer]:
            - /url: "#"
          - link "Privacy Policy" [ref=e866] [cursor=pointer]:
            - /url: "#"
          - link "Terms of Service" [ref=e867] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e868]:
          - heading "Follow Us" [level=4] [ref=e869]
          - generic [ref=e870]:
            - link [ref=e871] [cursor=pointer]:
              - /url: "#"
              - img [ref=e872]
            - link [ref=e874] [cursor=pointer]:
              - /url: "#"
              - img [ref=e875]
            - link [ref=e878] [cursor=pointer]:
              - /url: "#"
              - img [ref=e879]
      - generic [ref=e881]:
        - paragraph [ref=e882]: © 2026 Lelungo. All rights reserved.
        - generic [ref=e883]:
          - generic [ref=e884]: Jakarta, ID
          - generic [ref=e886]: Operational
  - alert [ref=e887]
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