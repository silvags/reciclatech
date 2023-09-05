interface Address {
    rua: string;
    complement: string | null;
    neighborhood: string;
    city: string;
    state: string;
  }
  
  interface ResiduesAccepted {
    recyclables: string[];
    electronics: string[];
  }
  
  interface Pev {
    type: string;
    geometry: {
      type: string;
      coordinates: [number, number, number];
    };
    properties: {
      name: string;
      description: string;
      address: Address;
      schedule: string;
      residuesAccepted: ResiduesAccepted;
      contact: string;
      email: string | null;
      site: string | null;
      socialMedia: string | null;
    };
  }
  
  export default Pev;