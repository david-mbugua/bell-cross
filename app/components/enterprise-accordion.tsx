"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";
import { enterpriseCapabilities } from "@/lib/site";

export function EnterpriseAccordion() {
  return (
    <Accordion.Root className="capability-accordion" collapsible type="single">
      {enterpriseCapabilities.map((capability, index) => (
        <Accordion.Item className="capability-item" key={capability.title} value={`capability-${index}`}>
          <Accordion.Header className="capability-heading">
            <Accordion.Trigger className="capability-trigger">
              <span className="capability-text">
                <span className="capability-title">{capability.title}</span>
                <span className="capability-summary">{capability.summary}</span>
              </span>
              <CaretDown aria-hidden="true" className="accordion-chevron" size={19} weight="regular" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="capability-content">
            <ul className="capability-details">
              {capability.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
