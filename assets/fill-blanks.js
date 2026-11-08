(function () {
    'use strict';

    var FILL_BLANKS = {
        'Chapter1.html': [
            {
                q: 'The SI unit of force is the ___.',
                answers: ['newton', 'n'],
                explanation: 'Force is measured in newtons (N), where 1 N = 1 kg·m/s².'
            },
            {
                q: 'A physical quantity that has both magnitude and direction is called a ___.',
                answers: ['vector'],
                explanation: 'A vector has both magnitude and direction, unlike a scalar, which has magnitude only.'
            },
            {
                q: 'The SI unit of length is the ___.',
                answers: ['meter', 'metre', 'm'],
                explanation: 'The meter (m) is the SI base unit of length.'
            },
            {
                q: 'The measurement 0.00450 m has ___ significant figures.',
                answers: ['3', 'three'],
                explanation: 'The leading zeros are not significant. The digits 4, 5, and the trailing zero are significant.'
            },
            {
                q: 'The magnitude of the vector A = 3i + 4j is ___.',
                answers: ['5'],
                explanation: 'The magnitude is √(3² + 4²) = √25 = 5.'
            },
            {
                q: 'The dot product of two perpendicular vectors is ___.',
                answers: ['zero', '0'],
                explanation: 'For perpendicular vectors the angle is 90°, and cos 90° = 0, so the dot product is zero.'
            },
            {
                q: 'The SI prefix nano represents 10 to the power of ___.',
                answers: ['-9', '−9', 'minus 9'],
                explanation: 'Nano means 10⁻⁹. For example, 1 nanometer = 10⁻⁹ meter.'
            },
            {
                q: 'The cross product of two parallel vectors is ___.',
                answers: ['zero', '0'],
                explanation: 'For parallel vectors the angle is 0°, and sin 0° = 0, so the cross product is zero.'
            },
            {
                q: 'The number 3.2 × 10⁴ equals ___.',
                answers: ['32000', '32,000'],
                explanation: 'Multiplying by 10⁴ moves the decimal point four places to the right, giving 32,000.'
            },
            {
                q: 'The SI unit of mass is the ___.',
                answers: ['kilogram', 'kg'],
                explanation: 'The kilogram (kg) is the SI base unit of mass.'
            }
        ],
        'Chapter2.html': [
            {
                q: 'The slope of a position-time graph represents ___.',
                answers: ['velocity'],
                explanation: 'The slope of position versus time is the rate of change of position, which is velocity.'
            },
            {
                q: 'The area under a velocity-time graph represents ___.',
                answers: ['displacement'],
                explanation: 'The area under a velocity-time graph equals displacement.'
            },
            {
                q: 'Acceleration is the rate of change of ___.',
                answers: ['velocity'],
                explanation: 'Acceleration is the change in velocity divided by the time interval.'
            },
            {
                q: 'For constant acceleration, the equation v = u + ___ applies.',
                answers: ['at', 'a t'],
                explanation: 'The first kinematic equation is v = u + at, where a is acceleration and t is time.'
            },
            {
                q: 'An object in free fall near Earth\'s surface accelerates at about ___ m/s².',
                answers: ['9.8', '9.81'],
                explanation: 'The acceleration due to gravity near Earth\'s surface is approximately 9.8 m/s² downward.'
            },
            {
                q: 'A car goes from rest to 20 m/s in 5 s. Its acceleration is ___ m/s².',
                answers: ['4'],
                explanation: 'Average acceleration is (20 − 0)/5 = 4 m/s².'
            },
            {
                q: 'The acceleration due to gravity near Earth\'s surface is directed ___.',
                answers: ['downward', 'down'],
                explanation: 'Gravity pulls objects toward Earth, so the acceleration is directed downward.'
            },
            {
                q: 'If velocity and acceleration point in opposite directions, the object is ___.',
                answers: ['slowing down', 'decelerating'],
                explanation: 'When acceleration opposes velocity, the speed decreases, so the object is slowing down.'
            },
            {
                q: 'Average speed equals total distance divided by total ___.',
                answers: ['time'],
                explanation: 'Average speed is the total distance traveled divided by the total time taken.'
            },
            {
                q: 'An object moving with constant velocity has an acceleration of ___.',
                answers: ['zero', '0'],
                explanation: 'Constant velocity means the velocity is not changing, so acceleration is zero.'
            }
        ],
        'Chapter3.html': [
            {
                q: 'For a projectile with no air resistance, the horizontal velocity remains ___.',
                answers: ['constant'],
                explanation: 'No horizontal force acts on the projectile, so its horizontal velocity stays constant.'
            },
            {
                q: 'The vertical acceleration of a projectile is due to ___.',
                answers: ['gravity'],
                explanation: 'Ignoring air resistance, gravity is the only vertical force acting on the projectile.'
            },
            {
                q: 'At the highest point of a projectile\'s path, the vertical velocity is ___.',
                answers: ['zero', '0'],
                explanation: 'The vertical velocity is momentarily zero at the highest point, while the horizontal velocity is unchanged.'
            },
            {
                q: 'Centripetal acceleration points toward the ___ of the circular path.',
                answers: ['center', 'centre'],
                explanation: 'Centripetal acceleration always points toward the center of the circle.'
            },
            {
                q: 'In uniform circular motion, the ___ remains constant.',
                answers: ['speed'],
                explanation: 'The speed is constant, although the direction of velocity changes continuously.'
            },
            {
                q: 'The range of a projectile is maximum at a launch angle of ___ degrees.',
                answers: ['45'],
                explanation: 'For a given launch speed and no air resistance, the range is greatest at 45°.'
            },
            {
                q: 'A boat crossing a river with a downstream current follows a path that is ___ downstream.',
                answers: ['diagonally', 'diagonal'],
                explanation: 'The boat velocity and current add as vectors, producing a diagonal downstream path.'
            },
            {
                q: 'Relative velocity is found by ___ the velocity vectors.',
                answers: ['subtracting'],
                explanation: 'For one-dimensional relative velocity, v_AB = v_A − v_B, so the vectors are subtracted.'
            },
            {
                q: 'Projectiles launched at 30° and 60° with the same speed have the same ___.',
                answers: ['range'],
                explanation: 'Complementary launch angles produce the same range when air resistance is ignored.'
            },
            {
                q: 'The path of a projectile under gravity alone is a ___.',
                answers: ['parabola', 'parabolic path'],
                explanation: 'With constant vertical acceleration and constant horizontal velocity, the trajectory is a parabola.'
            }
        ],
        'Chapter4.html': [
            {
                q: 'Newton\'s first law is also called the law of ___.',
                answers: ['inertia'],
                explanation: 'The first law is the law of inertia: objects resist changes in their state of motion.'
            },
            {
                q: 'Newton\'s second law is written F = ___.',
                answers: ['ma', 'm a'],
                explanation: 'Newton\'s second law relates net force, mass, and acceleration: F = ma.'
            },
            {
                q: 'The friction that acts when an object is not moving is called ___ friction.',
                answers: ['static'],
                explanation: 'Static friction prevents an object from starting to slide and can adjust up to a maximum value.'
            },
            {
                q: 'The force that opposes relative motion between surfaces is called ___.',
                answers: ['friction'],
                explanation: 'Friction acts opposite to the relative motion between two surfaces in contact.'
            },
            {
                q: 'The perpendicular force exerted by a surface on an object is the ___ force.',
                answers: ['normal'],
                explanation: 'The normal force acts perpendicular to the surface and supports the object.'
            },
            {
                q: 'Weight is calculated as W = ___.',
                answers: ['mg', 'm g'],
                explanation: 'Weight is the gravitational force on an object: W = mg.'
            },
            {
                q: 'Action-reaction forces act on ___ objects.',
                answers: ['different', 'two different'],
                explanation: 'Newton\'s third-law force pairs are equal and opposite but act on different objects.'
            },
            {
                q: 'When drag equals weight, a falling object reaches ___ velocity.',
                answers: ['terminal'],
                explanation: 'At terminal velocity the net force is zero, so the object falls at a constant speed.'
            },
            {
                q: 'The weight of a 10 kg object near Earth\'s surface is about ___ N.',
                answers: ['98'],
                explanation: 'Weight is W = mg = (10)(9.8) = 98 N.'
            },
            {
                q: 'An object remains at rest unless a net ___ force acts on it.',
                answers: ['external'],
                explanation: 'A net external force is required to change an object\'s state of motion.'
            }
        ],
        'Chapter5.html': [
            {
                q: 'The gravitational force is proportional to the product of the two ___.',
                answers: ['masses'],
                explanation: 'Newton\'s law of gravitation gives F = Gm₁m₂/r², so the force depends on the product of the masses.'
            },
            {
                q: 'The gravitational force is inversely proportional to the ___ of the distance.',
                answers: ['square'],
                explanation: 'The force is proportional to 1/r², so it depends on the square of the separation.'
            },
            {
                q: 'Kepler\'s first law states that planets move in ___.',
                answers: ['ellipses', 'ellipse'],
                explanation: 'Each planet moves in an ellipse with the Sun at one focus.'
            },
            {
                q: 'Kepler\'s second law states that equal ___ are swept in equal times.',
                answers: ['areas'],
                explanation: 'A planet sweeps out equal areas in equal time intervals, so it moves faster when close to the Sun.'
            },
            {
                q: 'Kepler\'s third law states that T² is proportional to ___.',
                answers: ['r³', 'r^3'],
                explanation: 'Kepler\'s third law is T² ∝ r³, where r is the average orbital radius.'
            },
            {
                q: 'A geostationary satellite has an orbital period of ___ hours.',
                answers: ['24'],
                explanation: 'A geostationary satellite matches Earth\'s rotation period of 24 hours.'
            },
            {
                q: 'The gravitational field strength near Earth\'s surface is about ___ N/kg.',
                answers: ['9.8', '9.81'],
                explanation: 'Near Earth\'s surface, the gravitational field strength is about 9.8 N/kg.'
            },
            {
                q: 'The escape velocity from Earth is about ___ km/s.',
                answers: ['11.2'],
                explanation: 'The escape velocity from Earth\'s surface is approximately 11.2 km/s.'
            },
            {
                q: 'A satellite in a circular orbit has a constant ___.',
                answers: ['speed'],
                explanation: 'Its speed is constant, but its velocity direction changes continuously.'
            },
            {
                q: 'The force providing the centripetal force for a satellite is ___.',
                answers: ['gravity'],
                explanation: 'Earth\'s gravitational pull provides the centripetal force that keeps a satellite in orbit.'
            }
        ],
        'Chapter6.html': [
            {
                q: 'Work is force multiplied by ___ in the direction of the force.',
                answers: ['displacement'],
                explanation: 'Work is W = Fd cos θ, where d is the displacement in the direction of the force.'
            },
            {
                q: 'The SI unit of work is the ___.',
                answers: ['joule', 'j'],
                explanation: 'Work and energy are measured in joules (J), where 1 J = 1 N·m.'
            },
            {
                q: 'The work-energy theorem says that net work equals the change in ___ energy.',
                answers: ['kinetic'],
                explanation: 'The net work done on an object equals its change in kinetic energy.'
            },
            {
                q: 'Power is work divided by ___.',
                answers: ['time'],
                explanation: 'Power is the rate of doing work: P = W/t.'
            },
            {
                q: 'The SI unit of power is the ___.',
                answers: ['watt', 'w'],
                explanation: 'Power is measured in watts (W), where 1 W = 1 J/s.'
            },
            {
                q: 'Kinetic energy is proportional to the ___ of the speed.',
                answers: ['square'],
                explanation: 'Kinetic energy is KE = ½mv², so it is proportional to the square of the speed.'
            },
            {
                q: 'Gravitational potential energy near Earth is PE = mgh, where h is the ___.',
                answers: ['height'],
                explanation: 'In PE = mgh, h is the height above the reference level.'
            },
            {
                q: 'A stretched spring stores ___ potential energy.',
                answers: ['elastic'],
                explanation: 'Deforming a spring stores elastic potential energy, which can be released later.'
            },
            {
                q: 'Mechanical energy is conserved when only ___ forces do work.',
                answers: ['conservative'],
                explanation: 'Only conservative forces, such as gravity and spring forces, conserve mechanical energy.'
            },
            {
                q: 'If the speed of an object doubles, its kinetic energy becomes ___ times larger.',
                answers: ['4', 'four'],
                explanation: 'Since KE ∝ v², doubling the speed increases kinetic energy by a factor of 4.'
            }
        ],
        'Chapter7.html': [
            {
                q: 'Momentum is mass multiplied by ___.',
                answers: ['velocity'],
                explanation: 'Momentum is p = mv, so it is mass multiplied by velocity.'
            },
            {
                q: 'The SI unit of momentum is ___.',
                answers: ['kg·m/s', 'kg m/s', 'kgm/s'],
                explanation: 'Momentum is measured in kilogram-meters per second (kg·m/s).'
            },
            {
                q: 'Impulse equals the change in ___.',
                answers: ['momentum'],
                explanation: 'Impulse is J = FΔt, which equals the change in momentum.'
            },
            {
                q: 'In an elastic collision, both momentum and ___ energy are conserved.',
                answers: ['kinetic'],
                explanation: 'Elastic collisions conserve both momentum and kinetic energy.'
            },
            {
                q: 'In a perfectly inelastic collision, the objects ___ together.',
                answers: ['stick'],
                explanation: 'In a perfectly inelastic collision, the objects stick together after colliding.'
            },
            {
                q: 'The total momentum of an isolated system is ___.',
                answers: ['conserved', 'constant'],
                explanation: 'With no net external force, the total momentum of an isolated system remains constant.'
            },
            {
                q: 'The center of mass of a uniform meter stick is at ___ cm.',
                answers: ['50'],
                explanation: 'A uniform meter stick has its center of mass at its midpoint, 50 cm.'
            },
            {
                q: 'A 2 kg object moving at 3 m/s has momentum ___ kg·m/s.',
                answers: ['6'],
                explanation: 'Momentum is p = mv = (2)(3) = 6 kg·m/s.'
            },
            {
                q: 'The recoil of a gun is explained by conservation of ___.',
                answers: ['momentum'],
                explanation: 'The forward momentum of the bullet is balanced by the backward momentum of the gun.'
            },
            {
                q: 'For a ring, the center of mass lies ___ the material of the ring.',
                answers: ['outside'],
                explanation: 'The center of mass of a ring is at its center, which is outside the material of the ring.'
            }
        ],
        'Chapter8.html': [
            {
                q: 'Pressure is force divided by ___.',
                answers: ['area'],
                explanation: 'Pressure is P = F/A, the force per unit area.'
            },
            {
                q: 'The SI unit of pressure is the ___.',
                answers: ['pascal', 'pa'],
                explanation: 'Pressure is measured in pascals (Pa), where 1 Pa = 1 N/m².'
            },
            {
                q: 'In the pressure formula P = P₀ + ρgh, the symbol h represents ___.',
                answers: ['depth', 'height'],
                explanation: 'In this formula, h is the depth below the fluid surface or the height of the fluid column.'
            },
            {
                q: 'Archimedes\' principle says the buoyant force equals the weight of the ___ fluid.',
                answers: ['displaced'],
                explanation: 'The buoyant force equals the weight of the fluid displaced by the object.'
            },
            {
                q: 'The equation of continuity states that the product of cross-sectional area and ___ is constant.',
                answers: ['velocity', 'speed'],
                explanation: 'The continuity equation is A₁v₁ = A₂v₂, so area times velocity is constant for an incompressible fluid.'
            },
            {
                q: 'Bernoulli\'s equation relates pressure, fluid speed, and ___.',
                answers: ['height', 'elevation'],
                explanation: 'Bernoulli\'s equation combines pressure, kinetic energy per volume, and gravitational potential energy per volume.'
            },
            {
                q: 'Young\'s modulus is stress divided by ___.',
                answers: ['strain'],
                explanation: 'Young\'s modulus Y = stress/strain, a measure of a material\'s stiffness.'
            },
            {
                q: 'An object floats when its average density is ___ than the fluid density.',
                answers: ['less', 'lower', 'smaller'],
                explanation: 'An object floats if its average density is less than or equal to the fluid density.'
            },
            {
                q: 'Gauge pressure equals absolute pressure minus ___ pressure.',
                answers: ['atmospheric'],
                explanation: 'Gauge pressure is measured relative to atmospheric pressure: P_gauge = P_absolute − P_atm.'
            },
            {
                q: 'In a narrower section of a pipe, the fluid speed ___.',
                answers: ['increases', 'rises'],
                explanation: 'By the continuity equation, a smaller cross-sectional area produces a higher fluid speed.'
            }
        ],
        'Chapter9.html': [
            {
                q: 'Temperature measures the average ___ energy of particles.',
                answers: ['kinetic'],
                explanation: 'Temperature is related to the average kinetic energy of the particles in a substance.'
            },
            {
                q: 'The Zeroth Law justifies the use of ___.',
                answers: ['thermometers', 'thermometer'],
                explanation: 'The Zeroth Law establishes thermal equilibrium and allows temperature to be measured with thermometers.'
            },
            {
                q: 'Absolute zero is 0 ___.',
                answers: ['k', 'kelvin'],
                explanation: 'Absolute zero is 0 K, approximately −273.15°C.'
            },
            {
                q: '25°C equals ___ K.',
                answers: ['298.15', '298'],
                explanation: 'T_K = T_C + 273.15 = 25 + 273.15 = 298.15 K.'
            },
            {
                q: 'Linear expansion is proportional to the change in ___.',
                answers: ['temperature'],
                explanation: 'The change in length is ΔL = αL₀ΔT, so it is proportional to the temperature change.'
            },
            {
                q: 'Heat transfer through direct molecular contact is called ___.',
                answers: ['conduction'],
                explanation: 'Conduction transfers heat through direct contact between particles.'
            },
            {
                q: 'Heat transfer through the movement of a fluid is called ___.',
                answers: ['convection'],
                explanation: 'Convection transfers heat by the bulk movement of a liquid or gas.'
            },
            {
                q: 'Heat transfer by electromagnetic waves is called ___.',
                answers: ['radiation'],
                explanation: 'Radiation transfers energy through electromagnetic waves and can occur through a vacuum.'
            },
            {
                q: 'The First Law is ΔU = Q − ___.',
                answers: ['w', 'work'],
                explanation: 'The First Law is ΔU = Q − W, where W is work done by the system.'
            },
            {
                q: 'The heat required for a phase change is Q = ___.',
                answers: ['ml', 'm l'],
                explanation: 'The heat required for a phase change is Q = mL, where L is the latent heat.'
            }
        ],
        'Chapter10.html': [
            {
                q: 'In SHM, acceleration is proportional to ___ and opposite in direction.',
                answers: ['displacement'],
                explanation: 'Simple harmonic motion satisfies a = −ω²x, so acceleration is proportional to displacement and opposite to it.'
            },
            {
                q: 'The time for one complete oscillation is the ___.',
                answers: ['period'],
                explanation: 'The period T is the time required for one complete cycle of motion.'
            },
            {
                q: 'Frequency equals 1 divided by the ___.',
                answers: ['period'],
                explanation: 'Frequency and period are reciprocals: f = 1/T.'
            },
            {
                q: 'The period of a simple pendulum depends on its length and on ___.',
                answers: ['g', 'gravity', 'gravitational acceleration'],
                explanation: 'For small oscillations, T = 2π√(L/g), so the period depends on length and gravitational acceleration.'
            },
            {
                q: 'Wave speed equals frequency multiplied by ___.',
                answers: ['wavelength'],
                explanation: 'The wave equation is v = fλ, where λ is the wavelength.'
            },
            {
                q: 'In a longitudinal wave, particles oscillate ___ to the wave direction.',
                answers: ['parallel'],
                explanation: 'In a longitudinal wave, particle displacement is parallel to the direction of wave travel.'
            },
            {
                q: 'Sound cannot travel through a ___.',
                answers: ['vacuum'],
                explanation: 'Sound is a mechanical wave and needs a medium, so it cannot travel through a vacuum.'
            },
            {
                q: 'A standing wave on a string fixed at both ends has ___ at the ends.',
                answers: ['nodes'],
                explanation: 'The fixed ends cannot move, so they are nodes of the standing wave.'
            },
            {
                q: 'Resonance occurs when the driving frequency equals the ___ frequency.',
                answers: ['natural'],
                explanation: 'Resonance occurs when a system is driven at its natural frequency, producing a large amplitude.'
            },
            {
                q: 'The Doppler effect changes the observed ___ of a wave.',
                answers: ['frequency'],
                explanation: 'Relative motion between a source and observer changes the observed frequency of the wave.'
            }
        ],
        'Chapter11.html': [
            {
                q: 'Coulomb\'s law says the electric force is proportional to the product of the ___.',
                answers: ['charges'],
                explanation: 'Coulomb\'s law gives F = kq₁q₂/r², so the force depends on the product of the charges.'
            },
            {
                q: 'Electric field lines point ___ from a positive charge.',
                answers: ['outward', 'away'],
                explanation: 'Electric field lines point away from positive charges and toward negative charges.'
            },
            {
                q: 'Ohm\'s law is V = ___.',
                answers: ['ir', 'i r'],
                explanation: 'Ohm\'s law states that voltage equals current multiplied by resistance: V = IR.'
            },
            {
                q: 'The SI unit of resistance is the ___.',
                answers: ['ohm', 'ω'],
                explanation: 'Resistance is measured in ohms (Ω).'
            },
            {
                q: 'Electrical power is P = ___.',
                answers: ['iv', 'i v'],
                explanation: 'Electrical power is P = IV, the product of current and voltage.'
            },
            {
                q: 'The equivalent resistance of parallel resistors is ___ than the smallest resistor.',
                answers: ['less', 'smaller', 'lower'],
                explanation: 'The equivalent resistance of a parallel combination is always less than the smallest individual resistance.'
            },
            {
                q: 'Kirchhoff\'s junction rule is based on conservation of ___.',
                answers: ['charge'],
                explanation: 'The junction rule states that current entering a junction equals current leaving, conserving charge.'
            },
            {
                q: 'Lenz\'s law says the induced current opposes the change in magnetic ___.',
                answers: ['flux'],
                explanation: 'Lenz\'s law states that induced current creates a magnetic field that opposes the change in flux.'
            },
            {
                q: 'A diode allows current mainly in ___ direction.',
                answers: ['one', 'a single'],
                explanation: 'A diode conducts mainly in its forward direction and blocks current in reverse bias.'
            },
            {
                q: 'The SI unit of capacitance is the ___.',
                answers: ['farad', 'f'],
                explanation: 'Capacitance is measured in farads (F), where 1 F = 1 C/V.'
            }
        ],
        'Chapter12.html': [
            {
                q: 'The law of reflection states that the angle of incidence equals the angle of ___.',
                answers: ['reflection'],
                explanation: 'The angle of incidence equals the angle of reflection, both measured from the normal.'
            },
            {
                q: 'Light bends toward the normal when it enters a ___ medium.',
                answers: ['denser'],
                explanation: 'Light slows down in a denser medium and bends toward the normal.'
            },
            {
                q: 'Snell\'s law relates the angle of incidence to the angle of ___.',
                answers: ['refraction'],
                explanation: 'Snell\'s law relates the angles of incidence and refraction to the refractive indices of the two media.'
            },
            {
                q: 'A convex lens is a ___ lens.',
                answers: ['converging'],
                explanation: 'A convex lens is thicker in the middle and converges parallel rays of light.'
            },
            {
                q: 'A real image can be projected onto a ___.',
                answers: ['screen'],
                explanation: 'Real images are formed by converging rays and can be projected onto a screen.'
            },
            {
                q: 'A plane mirror forms a ___ image.',
                answers: ['virtual'],
                explanation: 'A plane mirror forms a virtual, upright image of the same size.'
            },
            {
                q: 'Total internal reflection occurs above the ___ angle.',
                answers: ['critical'],
                explanation: 'Total internal reflection occurs when the angle of incidence exceeds the critical angle.'
            },
            {
                q: 'Nearsightedness is corrected with a ___ lens.',
                answers: ['diverging', 'concave'],
                explanation: 'A diverging lens spreads light so the image forms farther back on the retina.'
            },
            {
                q: 'A magnifying glass uses a ___ lens.',
                answers: ['converging', 'convex'],
                explanation: 'A magnifying glass uses a converging lens with the object placed within its focal length.'
            },
            {
                q: 'Parallel rays converge at the ___ after passing through a converging lens.',
                answers: ['focal point', 'focus'],
                explanation: 'A converging lens brings parallel rays to a focus at the focal point.'
            }
        ],
        'Chapter13.html': [
            {
                q: 'The combined water loss from soil evaporation and plant transpiration is called ___.',
                answers: ['evapotranspiration'],
                explanation: 'Evapotranspiration combines evaporation from the soil with transpiration from plants.'
            },
            {
                q: 'A wind turbine converts the kinetic energy of wind into ___ energy.',
                answers: ['electrical', 'electric'],
                explanation: 'A wind turbine extracts kinetic energy from moving air and converts it into electrical energy.'
            },
            {
                q: 'Ultrasonic testing is used to detect internal ___ in materials.',
                answers: ['flaws', 'defects'],
                explanation: 'Ultrasonic waves reflect from internal defects, allowing inspectors to detect flaws without damaging the material.'
            },
            {
                q: 'MRI uses strong magnetic fields and ___ waves.',
                answers: ['radio', 'radiofrequency', 'radio frequency'],
                explanation: 'MRI uses strong magnetic fields and radio-frequency pulses to image soft tissue.'
            },
            {
                q: 'Radiocarbon dating uses the decay of carbon-___.',
                answers: ['14'],
                explanation: 'Radiocarbon dating measures the decay of carbon-14 in organic remains.'
            },
            {
                q: 'The half-life of carbon-14 is about ___ years.',
                answers: ['5730', '5,730'],
                explanation: 'Carbon-14 has a half-life of about 5,730 years.'
            },
            {
                q: 'A satellite in orbit is in continuous free ___.',
                answers: ['fall'],
                explanation: 'A satellite is in continuous free fall around Earth while its tangential velocity keeps it in orbit.'
            },
            {
                q: 'Non-destructive testing inspects materials without causing ___.',
                answers: ['damage'],
                explanation: 'Non-destructive testing allows engineers to detect flaws without damaging the component being inspected.'
            },
            {
                q: 'Medical ultrasound uses high-frequency ___ waves.',
                answers: ['sound'],
                explanation: 'Ultrasound imaging uses high-frequency sound waves that reflect from body tissues.'
            },
            {
                q: 'Darcy\'s law describes the flow of water through ___.',
                answers: ['soil', 'porous media', 'porous medium'],
                explanation: 'Darcy\'s law relates water flow through a porous medium such as soil to the hydraulic gradient.'
            }
        ]
    };

    var currentFile = (window.location.pathname.split('/').pop() || '').split('?')[0].split('#')[0];
    var items = FILL_BLANKS[currentFile];

    if (!items || !items.length || document.getElementById('chapter-fib')) {
        return;
    }

    function shuffle(list) {
        var copy = list.slice();

        for (var i = copy.length - 1; i > 0; i -= 1) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }

        return copy;
    }

    items = shuffle(items);

    var state = items.map(function () {
        return { checked: false, correct: false };
    });
    var score = 0;

    function normalize(value) {
        return String(value)
            .toLowerCase()
            .replace(/,/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/[.!?;:]+$/, '');
    }

    function numericValue(value) {
        var cleaned = normalize(value).replace(/\s+/g, '');

        if (!/^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?$/.test(cleaned)) {
            return null;
        }

        var number = Number(cleaned);

        return isFinite(number) ? number : null;
    }

    function isCorrect(value, answers, tolerance) {
        var numeric = numericValue(value);

        if (numeric !== null) {
            return answers.some(function (answer) {
                var expected = numericValue(answer);

                if (expected === null) {
                    return false;
                }

                var allowed = typeof tolerance === 'number' ? tolerance : Math.max(Math.abs(expected) * 0.005, 1e-9);

                return Math.abs(numeric - expected) <= allowed;
            });
        }

        var normalized = normalize(value);

        return answers.some(function (answer) {
            return normalize(answer) === normalized;
        });
    }

    function questionMarkup(item, index) {
        var parts = item.q.split('___');
        var before = parts[0] || '';
        var after = parts.length > 1 ? parts.slice(1).join('') : '';

        return '<li class="quiz-question fib-question" data-question="' + index + '">' +
            '<div class="quiz-prompt fib-prompt">' +
                '<span class="quiz-number" aria-hidden="true">' + (index + 1) + '</span>' +
                '<div class="fib-body">' +
                    '<p class="fib-sentence" id="fib-prompt-' + index + '">' + before +
                        '<input type="text" class="fib-input" data-fib-input aria-label="Answer for question ' + (index + 1) + '" autocomplete="off" spellcheck="false">' +
                        after +
                    '</p>' +
                    '<div class="fib-actions">' +
                        '<button type="button" class="fib-check" data-fib-check>Check answer</button>' +
                        '<span class="fib-hint">Press Enter to check</span>' +
                    '</div>' +
                    '<div class="fib-feedback" role="status" aria-live="polite"></div>' +
                '</div>' +
            '</div>' +
        '</li>';
    }

    var section = document.createElement('section');
    section.className = 'chapter-quiz chapter-fib';
    section.id = 'chapter-fib';
    section.setAttribute('aria-labelledby', 'chapter-fib-title');
    section.innerHTML =
        '<div class="quiz-head">' +
            '<div class="quiz-heading">' +
                '<p class="quiz-kicker">Recall practice</p>' +
                '<h2 class="quiz-title" id="chapter-fib-title">Fill in the Blanks</h2>' +
            '</div>' +
            '<div class="quiz-score-wrap">' +
                '<span class="quiz-score-label">Score</span>' +
                '<span class="quiz-score" data-fib-score aria-live="polite">0 / ' + items.length + '</span>' +
            '</div>' +
        '</div>' +
        '<div class="quiz-progress" aria-hidden="true"><div class="quiz-progress-bar" data-fib-progress></div></div>' +
        '<div class="quiz-body">' +
            '<ol class="quiz-list">' + items.map(questionMarkup).join('') + '</ol>' +
            '<div class="quiz-footer">' +
                '<p class="quiz-message" data-fib-message>Type each missing word or value, then check your answer.</p>' +
                '<button type="button" class="quiz-reset" data-fib-reset>Reset quiz</button>' +
            '</div>' +
        '</div>';

    var anchor = null;
    var headings = document.querySelectorAll('h2');

    for (var i = 0; i < headings.length; i += 1) {
        var headingText = (headings[i].textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();

        if (headings[i].id === 'conceptual-questions' || headingText === 'conceptual questions') {
            anchor = headings[i];
            break;
        }
    }

    if (anchor && anchor.parentNode) {
        anchor.parentNode.insertBefore(section, anchor);
    } else {
        document.body.appendChild(section);
    }

    var scoreElement = section.querySelector('[data-fib-score]');
    var progressElement = section.querySelector('[data-fib-progress]');
    var messageElement = section.querySelector('[data-fib-message]');

    function updateScore() {
        var answered = state.filter(function (item) {
            return item.checked;
        }).length;

        scoreElement.textContent = score + ' / ' + items.length;
        progressElement.style.width = ((score / items.length) * 100) + '%';

        if (answered === 0) {
            messageElement.textContent = 'Type each missing word or value, then check your answer.';
        } else if (score === items.length) {
            messageElement.textContent = 'Perfect score. You have mastered this chapter.';
        } else if (score >= Math.ceil(items.length * 0.6)) {
            messageElement.textContent = 'Good work. Review the explanations for any missed blanks.';
        } else {
            messageElement.textContent = 'Keep going. Read each explanation carefully and use reset to retest.';
        }
    }

    function checkAnswer(index) {
        if (state[index].checked) {
            return;
        }

        var questionElement = section.querySelector('[data-question="' + index + '"]');
        var input = questionElement.querySelector('[data-fib-input]');
        var feedback = questionElement.querySelector('.fib-feedback');
        var checkButton = questionElement.querySelector('[data-fib-check]');

        if (!normalize(input.value)) {
            feedback.className = 'fib-feedback is-visible';
            feedback.innerHTML = '<strong>Type an answer first.</strong>';
            input.focus();
            return;
        }

        var correct = isCorrect(input.value, items[index].answers, items[index].tolerance);

        state[index].checked = true;
        state[index].correct = correct;
        input.disabled = true;
        input.classList.add(correct ? 'is-correct' : 'is-wrong');
        input.setAttribute('aria-invalid', correct ? 'false' : 'true');
        checkButton.disabled = true;

        if (correct) {
            score += 1;
            feedback.className = 'fib-feedback is-visible is-correct';
            feedback.innerHTML = '<strong>Correct.</strong> ' + items[index].explanation;
        } else {
            feedback.className = 'fib-feedback is-visible is-wrong';
            feedback.innerHTML = '<strong>Not quite.</strong> The correct answer is <strong>' + items[index].answers[0] + '</strong>. ' + items[index].explanation;
        }

        updateScore();
    }

    function resetQuiz() {
        state = items.map(function () {
            return { checked: false, correct: false };
        });
        score = 0;

        Array.prototype.forEach.call(section.querySelectorAll('.fib-input'), function (input) {
            input.disabled = false;
            input.value = '';
            input.classList.remove('is-correct', 'is-wrong');
            input.removeAttribute('aria-invalid');
        });

        Array.prototype.forEach.call(section.querySelectorAll('.fib-check'), function (button) {
            button.disabled = false;
        });

        Array.prototype.forEach.call(section.querySelectorAll('.fib-feedback'), function (feedback) {
            feedback.className = 'fib-feedback';
            feedback.innerHTML = '';
        });

        updateScore();
    }

    section.addEventListener('click', function (event) {
        var checkButton = event.target.closest ? event.target.closest('[data-fib-check]') : null;

        if (checkButton) {
            var questionElement = checkButton.closest('.fib-question');
            checkAnswer(parseInt(questionElement.getAttribute('data-question'), 10));
            return;
        }

        if (event.target.closest && event.target.closest('[data-fib-reset]')) {
            resetQuiz();
        }
    });

    section.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && event.target.classList.contains('fib-input')) {
            event.preventDefault();
            var questionElement = event.target.closest('.fib-question');
            checkAnswer(parseInt(questionElement.getAttribute('data-question'), 10));
        }
    });

    updateScore();
})();
