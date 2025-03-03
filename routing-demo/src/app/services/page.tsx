import Link from "next/link"



export default function JaaGaServices() {
  const data = [
    {
        "id": "title-verification-report",
        "title": "Title Verification Report/Legal Opinion",
        "description": "Ensure a secure investment by verifying the property's legal ownership status and getting a professional legal opinion from our knowledgeable lawyers for complete peace of mind.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/TitleVerificationReport.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/title_verification.png"
        },
        "price": {
            "type": "CASH",
            "amount": 5999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 5
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "court-cases-dispute-check",
        "title": "Court-Cases/ Dispute Check",
        "description": "We will inform you of any problems or court cases related to your property, as well as what is happening with it.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/CourtCases.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/court_cases.png"
        },
        "price": {
            "type": "CASH",
            "amount": 2999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 5
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "mutation-check",
        "title": "Mutation Check",
        "description": "This service verifies whether the revenue department has updated your property information in your name.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/MutationCheck.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/Mutation_check.png"
        },
        "price": {
            "type": "CASH",
            "amount": 2999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 4
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "sale-deed-agreement",
        "title": "Sale Deed Agreement",
        "description": "This service provides a legally valid Sale Deed Agreement, ensuring the transfer of property ownership from the seller to the buyer, along with verification of all necessary documents.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/sale_deed_agreement.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/sale_deed_agreement.png"
        },
        "price": {
            "type": "CASH",
            "amount": 7499,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 4
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "dagpa",
        "title": "Development Agreement cum General Power of Attorney (DAGPA)",
        "description": "This service provides a legally valid DAGPA, authorizing a developer to construct a project on the landowner's property.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/DAGPA.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/DAGPA.png"
        },
        "price": {
            "type": "CASH",
            "amount": 12999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 4
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "agpa",
        "title": "Agreement of Sale cum General Power of Attorney (AGPA)",
        "description": "This service provides a legally valid AGPA, transferring the right to sell property and allowing the buyer to take possession before the formal sale deed is executed.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/AGPA.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/AGPA.png"
        },
        "price": {
            "type": "CASH",
            "amount": 8999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 4
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "rental-deed",
        "title": "Rental Deed Agreement",
        "description": "A rental deed agreement is a contract between a landlord and tenant detailing the terms of the property lease, including rent, duration, deposit, and responsibilities.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/rental_deed_agreement.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/rental_deed_agreement.png"
        },
        "price": {
            "type": "CASH",
            "amount": 2999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 4
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "mou",
        "title": "Memorandum of Understanding (MoUs)",
        "description": "An MoU is a non-binding agreement outlining mutual intentions between parties.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/MOUS.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/MOUS.png"
        },
        "price": {
            "type": "CASH",
            "amount": 5999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 4
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "rectification-deed",
        "title": "Rectification Deed",
        "description": "A rectification deed corrects errors in a previously executed document.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/rectification_deed.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/rectification_deed.png"
        },
        "price": {
            "type": "CASH",
            "amount": 2999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 4
        },
        "processingTime": "24 Hours"
    },
    {
        "id": "consult-lawyer",
        "title": "Legal Consultation by Call",
        "description": "Get legal consultation over a call to discuss your legal matters with an expert. You will get a call back in less than 12 hours.",
        "logo": {
            "webp": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/services/web_services/GetLegalOpinion.webp"
        },
        "mobilelogo": {
            "logo": "https://jaaga-public-1722574714.s3.ap-south-1.amazonaws.com/documents/legal-services/for-individuals/mobile_logos/Legal-opinion.png"
        },
        "price": {
            "type": "CASH",
            "amount": 1999,
            "currency": "INR"
        },
        "sla": {
            "type": "days",
            "value": 4
        },
        "processingTime": "24 Hours"
    }
]
  return (
    <div>
      <h1>JaaGaServices</h1>
      {
        data?.map((item)=>{
          return (
            <h4>
              <Link href={`services/${item?.id}`}> {item.id}</Link>
            </h4>
          )
        })
      }
    </div>
  )
}
