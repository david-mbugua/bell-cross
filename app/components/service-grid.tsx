import {
  AppleLogo,
  ChartLineUp,
  Code,
  DeviceMobile,
  GlobeHemisphereWest,
  Lightbulb,
} from "@phosphor-icons/react/dist/ssr";
import { digitalServices } from "@/lib/site";
import { MobileAppDialog } from "@/components/mobile-app-dialog";

const serviceIcons = {
  web: Code,
  mobile: DeviceMobile,
  marketing: ChartLineUp,
  data: Lightbulb,
  consulting: GlobeHemisphereWest,
  apple: AppleLogo,
} as const;

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {digitalServices.map((service) => {
        const Icon = serviceIcons[service.icon];
        return (
          <article className="service-item" key={service.name}>
            <div className="service-index-and-icon">
              <span className="service-index">{service.number}</span>
              <Icon aria-hidden="true" className="service-icon" size={25} weight="regular" />
            </div>
            <h3>{service.name}</h3>
            <p>{service.summary}</p>
            {"detailLink" in service && service.detailLink && <MobileAppDialog />}
          </article>
        );
      })}
    </div>
  );
}
