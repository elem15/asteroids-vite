interface Asteroid {
  links: {
    self: string;
  };
  id: string,
  neo_reference_id: string,
  name: string,
  nasa_jpl_url: string,
  absolute_magnitude_h: number,
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number,
      estimated_diameter_max: number;
    },
    meters: {
      estimated_diameter_min: number,
      estimated_diameter_max: number;
    },
    miles: {
      estimated_diameter_min: number,
      estimated_diameter_max: number;
    },
    feet: {
      estimated_diameter_min: number,
      estimated_diameter_max: number;
    };
  },
  is_potentially_hazardous_asteroid: boolean,
  close_approach_data: [
    {
      close_approach_date: string,
      close_approach_date_full: string,
      epoch_date_close_approach: number,
      relative_velocity: {
        kilometers_per_second: string,
        kilometers_per_hour: string,
        miles_per_hour: string;
      },
      miss_distance: {
        astronomical: string,
        lunar: string,
        kilometers: string,
        miles: string;
      };
      orbiting_body: string;
    }
  ];
  is_sentry_object: boolean;
};

interface AsteroidOnClient {
  id: string;
  name: string;
  close_approach_date?: string;
  miss_distance_kilometers: string;
  miss_distance_lunar?: string;
  estimated_diameter_max: number;
  size: 'large' | 'small';
  close_approach_data?: ApproachOnClient[];
  isInCart?: boolean;
  isDanger?: Boolean;
};


interface ResponseData {
  links: {
    next: string,
    previous: string,
    self: string;
  },
  element_count: number,
  near_earth_objects: Record<string, Asteroid[]>;
};

interface ErrorMessage {
  message: string;
};

type Measure = 'km' | 'luna';

interface ApproachOnClient {
  kilometers_per_hour: string,
  close_approach_date: string,
  miss_distance_kilometers: string,
  orbiting_body: 'Earth' | 'Venus' | 'Mars' | 'Jupiter';
  isDanger?: boolean;
}

interface AsteroidApproach {
  close_approach_date: string,
  close_approach_date_full: string,
  epoch_date_close_approach: number,
  relative_velocity: {
    kilometers_per_second: string,
    kilometers_per_hour: string,
    miles_per_hour: string;
  },
  miss_distance: {
    astronomical: string,
    lunar: string,
    kilometers: string,
    miles: string;
  },
  orbiting_body: 'Earth' | 'Venus' | 'Mars' | 'Jupiter';
}

interface AsteroidFull {
  links: {
    self: string;
  },
  id: string,
  neo_reference_id: string,
  name: string,
  designation: string,
  nasa_jpl_url: string,
  absolute_magnitude_h: number,
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number,
      estimated_diameter_max: number;
    },
    meters: {
      estimated_diameter_min: number,
      estimated_diameter_max: number;
    },
    miles: {
      estimated_diameter_min: number,
      estimated_diameter_max: number;
    },
    feet: {
      estimated_diameter_min: number,
      estimated_diameter_max: number;
    };
  },
  is_potentially_hazardous_asteroid: boolean,
  close_approach_data: AsteroidApproach[],
  orbital_data: {
    orbit_id: string,
    orbit_determination_date: string,
    first_observation_date: string,
    last_observation_date: string,
    data_arc_in_days: number,
    observations_used: number,
    orbit_uncertainty: string,
    minimum_orbit_intersection: string,
    jupiter_tisserand_invariant: string,
    epoch_osculation: string,
    eccentricity: string,
    semi_major_axis: string,
    inclination: string,
    ascending_node_longitude: string,
    orbital_period: string,
    perihelion_distance: string,
    perihelion_argument: string,
    aphelion_distance: string,
    perihelion_time: string,
    mean_anomaly: string,
    mean_motion: string,
    equinox: string,
    orbit_class: {
      orbit_class_type: string,
      orbit_class_description: string,
      orbit_class_range: string;
    };
  },
  is_sentry_object: boolean;
}