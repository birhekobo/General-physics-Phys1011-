(function () {
    'use strict';

    var TRUE_FALSE = {
        'Chapter1.html': [
            {
                q: 'The SI unit of force is the joule.',
                answer: false,
                explanation: 'The SI unit of force is the newton (N). The joule is the unit of energy.'
            },
            {
                q: 'Displacement is a vector quantity.',
                answer: true,
                explanation: 'Displacement has both magnitude and direction, so it is a vector.'
            },
            {
                q: 'Mass is a vector quantity.',
                answer: false,
                explanation: 'Mass is a scalar quantity. It has magnitude but no direction.'
            },
            {
                q: 'The dot product of two perpendicular vectors is zero.',
                answer: true,
                explanation: 'For perpendicular vectors, cos 90° = 0, so the dot product is zero.'
            },
            {
                q: 'A scalar quantity has both magnitude and direction.',
                answer: false,
                explanation: 'A scalar has magnitude only. A quantity with both magnitude and direction is a vector.'
            },
            {
                q: 'The cross product of two parallel vectors is zero.',
                answer: true,
                explanation: 'For parallel vectors, sin 0° = 0, so the magnitude of the cross product is zero.'
            },
            {
                q: 'The SI prefix micro represents 10⁻⁶.',
                answer: true,
                explanation: 'Micro means one millionth, or 10⁻⁶.'
            },
            {
                q: 'The measurement 0.00450 m has three significant figures.',
                answer: true,
                explanation: 'The digits 4, 5, and the trailing zero are significant, giving three significant figures.'
            },
            {
                q: 'The magnitude of the vector A = 3i + 4j is 7.',
                answer: false,
                explanation: 'The magnitude is √(3² + 4²) = 5, not 7.'
            },
            {
                q: 'The SI unit of mass is the newton.',
                answer: false,
                explanation: 'The SI unit of mass is the kilogram (kg). The newton is the unit of force.'
            }
        ],
        'Chapter2.html': [
            {
                q: 'The slope of a velocity-time graph gives acceleration.',
                answer: true,
                explanation: 'Acceleration is the rate of change of velocity, which is the slope of a velocity-time graph.'
            },
            {
                q: 'The area under a position-time graph gives displacement.',
                answer: false,
                explanation: 'The area under a velocity-time graph gives displacement, not the area under a position-time graph.'
            },
            {
                q: 'An object moving with constant velocity has zero acceleration.',
                answer: true,
                explanation: 'Constant velocity means the velocity is not changing, so acceleration is zero.'
            },
            {
                q: 'Acceleration is a vector quantity.',
                answer: true,
                explanation: 'Acceleration has both magnitude and direction, so it is a vector.'
            },
            {
                q: 'Free-fall acceleration near Earth is about 9.8 m/s² downward.',
                answer: true,
                explanation: 'Ignoring air resistance, objects in free fall accelerate at about 9.8 m/s² toward Earth.'
            },
            {
                q: 'Distance can be less than displacement.',
                answer: false,
                explanation: 'Distance is always greater than or equal to the magnitude of displacement.'
            },
            {
                q: 'If velocity and acceleration are in opposite directions, the object speeds up.',
                answer: false,
                explanation: 'When acceleration opposes velocity, the object slows down.'
            },
            {
                q: 'The equation v = u + at applies for constant acceleration.',
                answer: true,
                explanation: 'This kinematic equation applies when acceleration is constant.'
            },
            {
                q: 'An object thrown upward has zero acceleration at its highest point.',
                answer: false,
                explanation: 'At the highest point the velocity is zero, but gravity still acts, so acceleration is 9.8 m/s² downward.'
            },
            {
                q: 'Average speed is total distance divided by total time.',
                answer: true,
                explanation: 'Average speed = total distance / total time.'
            }
        ],
        'Chapter3.html': [
            {
                q: 'The horizontal velocity of a projectile remains constant if air resistance is ignored.',
                answer: true,
                explanation: 'No horizontal force acts on the projectile when air resistance is ignored, so horizontal velocity is constant.'
            },
            {
                q: 'The vertical acceleration of a projectile is zero.',
                answer: false,
                explanation: 'Gravity gives the projectile a constant downward acceleration of about 9.8 m/s².'
            },
            {
                q: 'At the highest point of a projectile path, the vertical velocity is zero.',
                answer: true,
                explanation: 'The vertical velocity is momentarily zero at the highest point.'
            },
            {
                q: 'Centripetal acceleration points away from the center of a circle.',
                answer: false,
                explanation: 'Centripetal acceleration points toward the center of the circular path.'
            },
            {
                q: 'In uniform circular motion, the speed is constant but the velocity changes.',
                answer: true,
                explanation: 'The speed is constant, but the direction of motion changes continuously, so velocity changes.'
            },
            {
                q: 'The path of a projectile under gravity alone is a straight line.',
                answer: false,
                explanation: 'The path is a parabola because vertical acceleration is constant while horizontal velocity is constant.'
            },
            {
                q: 'Complementary launch angles can give the same range.',
                answer: true,
                explanation: 'With no air resistance, complementary angles such as 30° and 60° give the same range.'
            },
            {
                q: 'Relative velocity depends on the observer frame of reference.',
                answer: true,
                explanation: 'Relative velocity is measured with respect to a particular observer or frame of reference.'
            },
            {
                q: 'Two objects dropped from the same height at the same time land at the same time if air resistance is ignored, regardless of mass.',
                answer: true,
                explanation: 'In the absence of air resistance, all objects fall with the same acceleration g.'
            },
            {
                q: 'The maximum range for a projectile on level ground occurs at 30°.',
                answer: false,
                explanation: 'The maximum range occurs at 45° when air resistance is ignored.'
            }
        ],
        'Chapter4.html': [
            {
                q: 'Newton\'s first law is also called the law of inertia.',
                answer: true,
                explanation: 'The first law describes inertia: objects resist changes in their state of motion.'
            },
            {
                q: 'Newton\'s second law can be written as F = ma.',
                answer: true,
                explanation: 'The second law relates net force, mass, and acceleration: F = ma.'
            },
            {
                q: 'Action-reaction forces act on the same object.',
                answer: false,
                explanation: 'Action-reaction pairs act on different objects, which is why they do not cancel on one object.'
            },
            {
                q: 'Kinetic friction acts opposite to the relative motion.',
                answer: true,
                explanation: 'Kinetic friction opposes the sliding motion between surfaces.'
            },
            {
                q: 'Weight and mass are the same quantity.',
                answer: false,
                explanation: 'Mass is the amount of matter, while weight is the gravitational force on that mass.'
            },
            {
                q: 'The normal force is always exactly equal to the object\'s weight.',
                answer: false,
                explanation: 'The normal force equals the weight only in simple cases such as a level surface with no vertical acceleration.'
            },
            {
                q: 'Static friction can adjust its magnitude up to a maximum value.',
                answer: true,
                explanation: 'Static friction adjusts to prevent sliding, up to its maximum value.'
            },
            {
                q: 'An object at terminal velocity has zero acceleration.',
                answer: true,
                explanation: 'At terminal velocity, drag balances weight, so the net force and acceleration are zero.'
            },
            {
                q: 'In an elevator accelerating upward, a passenger\'s apparent weight increases.',
                answer: true,
                explanation: 'The floor must push upward with more force than the passenger\'s weight, so apparent weight increases.'
            },
            {
                q: 'A net force is required to keep an object moving at constant velocity.',
                answer: false,
                explanation: 'With no net force, an object continues moving at constant velocity.'
            }
        ],
        'Chapter5.html': [
            {
                q: 'Gravitational force can be either attractive or repulsive.',
                answer: false,
                explanation: 'Gravitational force is always attractive; it never repels.'
            },
            {
                q: 'Gravitational force is proportional to 1/r².',
                answer: true,
                explanation: 'Newton\'s law of gravitation gives F = Gm₁m₂/r².'
            },
            {
                q: 'If the distance between two masses doubles, the gravitational force doubles.',
                answer: false,
                explanation: 'Because F ∝ 1/r², doubling the distance reduces the force to one quarter.'
            },
            {
                q: 'Kepler\'s first law says planets move in perfect circles.',
                answer: false,
                explanation: 'Kepler\'s first law says planets move in ellipses with the Sun at one focus.'
            },
            {
                q: 'According to Kepler\'s second law, a planet moves faster when it is closer to the Sun.',
                answer: true,
                explanation: 'Equal areas are swept in equal times, so the planet moves faster near the Sun.'
            },
            {
                q: 'Kepler\'s third law states that T² is proportional to r³.',
                answer: true,
                explanation: 'The square of the orbital period is proportional to the cube of the average orbital radius.'
            },
            {
                q: 'A geostationary satellite has an orbital period of 24 hours.',
                answer: true,
                explanation: 'It matches Earth\'s rotation period and stays above the same point on the equator.'
            },
            {
                q: 'A satellite in a circular orbit has constant velocity.',
                answer: false,
                explanation: 'Its speed is constant, but its velocity direction changes continuously.'
            },
            {
                q: 'The gravitational field strength near Earth\'s surface is about 9.8 N/kg.',
                answer: true,
                explanation: 'Near Earth\'s surface, the gravitational field strength is approximately 9.8 N/kg.'
            },
            {
                q: 'The escape velocity from Earth is about 11.2 km/s.',
                answer: true,
                explanation: 'The minimum speed needed to escape Earth\'s gravity is approximately 11.2 km/s.'
            }
        ],
        'Chapter6.html': [
            {
                q: 'Work is a scalar quantity.',
                answer: true,
                explanation: 'Work has magnitude but no direction, so it is a scalar.'
            },
            {
                q: 'A force perpendicular to displacement does no work.',
                answer: true,
                explanation: 'Since W = Fd cos 90° = 0, a perpendicular force does no work.'
            },
            {
                q: 'The SI unit of power is the joule.',
                answer: false,
                explanation: 'The SI unit of power is the watt (W). The joule is the unit of work and energy.'
            },
            {
                q: 'The work-energy theorem says net work equals the change in kinetic energy.',
                answer: true,
                explanation: 'The net work done on an object equals its change in kinetic energy.'
            },
            {
                q: 'Power is the rate of doing work.',
                answer: true,
                explanation: 'Power is work divided by time, P = W/t.'
            },
            {
                q: 'Kinetic energy is proportional to speed.',
                answer: false,
                explanation: 'Kinetic energy is KE = ½mv², so it is proportional to the square of the speed.'
            },
            {
                q: 'Gravitational potential energy near Earth is given by mgh.',
                answer: true,
                explanation: 'Near Earth\'s surface, gravitational potential energy is PE = mgh.'
            },
            {
                q: 'A stretched spring stores elastic potential energy.',
                answer: true,
                explanation: 'Deforming a spring stores elastic potential energy.'
            },
            {
                q: 'Mechanical energy is conserved when friction acts.',
                answer: false,
                explanation: 'Friction is non-conservative and converts mechanical energy into thermal energy.'
            },
            {
                q: 'If an object\'s speed doubles, its kinetic energy doubles.',
                answer: false,
                explanation: 'Kinetic energy is proportional to v², so doubling the speed quadruples the kinetic energy.'
            }
        ],
        'Chapter7.html': [
            {
                q: 'Momentum is a vector quantity.',
                answer: true,
                explanation: 'Momentum has both magnitude and direction, so it is a vector.'
            },
            {
                q: 'The SI unit of momentum is kg·m/s.',
                answer: true,
                explanation: 'Momentum is mass times velocity, so its SI unit is kg·m/s.'
            },
            {
                q: 'Impulse equals the change in momentum.',
                answer: true,
                explanation: 'Impulse J = FΔt equals the change in momentum, Δp.'
            },
            {
                q: 'In an elastic collision, kinetic energy is conserved.',
                answer: true,
                explanation: 'Elastic collisions conserve both momentum and kinetic energy.'
            },
            {
                q: 'In a perfectly inelastic collision, momentum is not conserved.',
                answer: false,
                explanation: 'Momentum is always conserved in a collision when there is no net external force.'
            },
            {
                q: 'The total momentum of an isolated system is constant.',
                answer: true,
                explanation: 'With no net external force, the total momentum of an isolated system is conserved.'
            },
            {
                q: 'The center of mass of a uniform meter stick is at 25 cm.',
                answer: false,
                explanation: 'The center of mass of a uniform meter stick is at its midpoint, 50 cm.'
            },
            {
                q: 'A gun recoils because momentum is not conserved.',
                answer: false,
                explanation: 'The gun recoils because total momentum is conserved: the backward momentum of the gun balances the forward momentum of the bullet.'
            },
            {
                q: 'The center of mass of a ring lies outside the material of the ring.',
                answer: true,
                explanation: 'The center of mass of a ring is at its center, which is outside the material.'
            },
            {
                q: 'Momentum depends on velocity.',
                answer: true,
                explanation: 'Momentum is p = mv, so it depends on both mass and velocity.'
            }
        ],
        'Chapter8.html': [
            {
                q: 'Pressure is a scalar quantity.',
                answer: true,
                explanation: 'Pressure has magnitude but no direction, so it is a scalar.'
            },
            {
                q: 'The SI unit of pressure is the newton.',
                answer: false,
                explanation: 'The SI unit of pressure is the pascal (Pa). The newton is the unit of force.'
            },
            {
                q: 'Pressure in a static fluid increases with depth.',
                answer: true,
                explanation: 'Pressure increases with depth because of the weight of the fluid above.'
            },
            {
                q: 'Archimedes\' principle says the buoyant force equals the weight of the displaced fluid.',
                answer: true,
                explanation: 'The buoyant force equals the weight of the fluid displaced by the object.'
            },
            {
                q: 'An object with density greater than the fluid always floats.',
                answer: false,
                explanation: 'An object with density greater than the fluid sinks; it floats only if its average density is less than or equal to the fluid density.'
            },
            {
                q: 'In a narrower pipe section, the fluid speed increases.',
                answer: true,
                explanation: 'By the continuity equation, a smaller cross-sectional area produces a higher fluid speed.'
            },
            {
                q: 'Bernoulli\'s equation says that higher fluid speed gives higher pressure in a horizontal pipe.',
                answer: false,
                explanation: 'In a horizontal pipe, higher fluid speed corresponds to lower pressure.'
            },
            {
                q: 'Gauge pressure equals absolute pressure minus atmospheric pressure.',
                answer: true,
                explanation: 'Gauge pressure is measured relative to atmospheric pressure: P_gauge = P_absolute − P_atm.'
            },
            {
                q: 'Young\'s modulus is stress divided by strain.',
                answer: true,
                explanation: 'Young\'s modulus Y = stress/strain.'
            },
            {
                q: 'A stiffer material has a smaller Young\'s modulus.',
                answer: false,
                explanation: 'A stiffer material has a larger Young\'s modulus because it resists deformation more strongly.'
            }
        ],
        'Chapter9.html': [
            {
                q: 'Temperature is a measure of the average kinetic energy of particles.',
                answer: true,
                explanation: 'Temperature is related to the average kinetic energy of the particles in a substance.'
            },
            {
                q: 'The Zeroth Law of Thermodynamics justifies the use of thermometers.',
                answer: true,
                explanation: 'The Zeroth Law establishes thermal equilibrium and allows temperature to be measured.'
            },
            {
                q: 'Absolute zero is 0°C.',
                answer: false,
                explanation: 'Absolute zero is 0 K, which is approximately −273.15°C.'
            },
            {
                q: '25°C equals 273.15 K.',
                answer: false,
                explanation: '25°C equals 298.15 K. The value 273.15 K corresponds to 0°C.'
            },
            {
                q: 'Linear expansion is proportional to the change in temperature.',
                answer: true,
                explanation: 'The change in length is ΔL = αL₀ΔT, so it is proportional to the temperature change.'
            },
            {
                q: 'Conduction requires the movement of a fluid.',
                answer: false,
                explanation: 'Convection requires fluid movement. Conduction occurs through direct molecular contact.'
            },
            {
                q: 'Radiation can transfer heat through a vacuum.',
                answer: true,
                explanation: 'Radiation transfers energy through electromagnetic waves and does not require a medium.'
            },
            {
                q: 'During a phase change, the temperature remains constant.',
                answer: true,
                explanation: 'During a phase change, heat changes the arrangement of particles rather than the temperature.'
            },
            {
                q: 'The First Law of Thermodynamics is ΔU = Q + W.',
                answer: false,
                explanation: 'The First Law is ΔU = Q − W, where W is work done by the system.'
            },
            {
                q: 'Water has a lower specific heat capacity than most metals.',
                answer: false,
                explanation: 'Water has a relatively high specific heat capacity, so it heats up more slowly than most metals.'
            }
        ],
        'Chapter10.html': [
            {
                q: 'In simple harmonic motion, acceleration is opposite to displacement.',
                answer: true,
                explanation: 'SHM satisfies a = −ω²x, so acceleration is opposite in direction to displacement.'
            },
            {
                q: 'The period is the number of oscillations per second.',
                answer: false,
                explanation: 'The number of oscillations per second is the frequency. The period is the time for one oscillation.'
            },
            {
                q: 'Frequency equals 1 divided by the period.',
                answer: true,
                explanation: 'Frequency and period are reciprocals: f = 1/T.'
            },
            {
                q: 'The period of a simple pendulum depends on the mass of the bob.',
                answer: false,
                explanation: 'For small oscillations, the period depends on length and g, not on the mass of the bob.'
            },
            {
                q: 'Wave speed equals frequency multiplied by wavelength.',
                answer: true,
                explanation: 'The wave equation is v = fλ.'
            },
            {
                q: 'In a longitudinal wave, particles oscillate perpendicular to the wave direction.',
                answer: false,
                explanation: 'In a longitudinal wave, particles oscillate parallel to the wave direction.'
            },
            {
                q: 'Sound can travel through a vacuum.',
                answer: false,
                explanation: 'Sound is a mechanical wave and requires a medium, so it cannot travel through a vacuum.'
            },
            {
                q: 'A standing wave on a string fixed at both ends has nodes at the ends.',
                answer: true,
                explanation: 'The fixed ends cannot move, so they are nodes.'
            },
            {
                q: 'Resonance occurs when the driving frequency equals the natural frequency.',
                answer: true,
                explanation: 'Resonance produces a large amplitude when the system is driven at its natural frequency.'
            },
            {
                q: 'The Doppler effect changes the observed frequency when there is relative motion.',
                answer: true,
                explanation: 'Relative motion between a source and observer changes the observed frequency.'
            }
        ],
        'Chapter11.html': [
            {
                q: 'Coulomb\'s law describes the electric force between charges.',
                answer: true,
                explanation: 'Coulomb\'s law gives the electric force between two point charges.'
            },
            {
                q: 'Electric field lines point toward a positive charge.',
                answer: false,
                explanation: 'Electric field lines point away from a positive charge and toward a negative charge.'
            },
            {
                q: 'Ohm\'s law is V = IR.',
                answer: true,
                explanation: 'Ohm\'s law states that voltage equals current times resistance.'
            },
            {
                q: 'The SI unit of resistance is the farad.',
                answer: false,
                explanation: 'The SI unit of resistance is the ohm (Ω). The farad is the unit of capacitance.'
            },
            {
                q: 'Electrical power is P = IV.',
                answer: true,
                explanation: 'Electrical power equals current multiplied by voltage.'
            },
            {
                q: 'The equivalent resistance of parallel resistors is less than the smallest resistor.',
                answer: true,
                explanation: 'Parallel paths reduce the equivalent resistance below the smallest individual resistance.'
            },
            {
                q: 'Kirchhoff\'s junction rule is based on conservation of energy.',
                answer: false,
                explanation: 'The junction rule is based on conservation of charge.'
            },
            {
                q: 'Lenz\'s law says the induced current opposes the change in magnetic flux.',
                answer: true,
                explanation: 'The induced current creates a magnetic field that opposes the change in flux.'
            },
            {
                q: 'A diode allows current mainly in one direction.',
                answer: true,
                explanation: 'A diode conducts in forward bias and blocks current in reverse bias.'
            },
            {
                q: 'A stationary charge in a magnetic field experiences maximum magnetic force.',
                answer: false,
                explanation: 'The magnetic force is F = qvB sin θ, so a stationary charge experiences zero magnetic force.'
            }
        ],
        'Chapter12.html': [
            {
                q: 'The angle of incidence equals the angle of reflection.',
                answer: true,
                explanation: 'This is the law of reflection, with both angles measured from the normal.'
            },
            {
                q: 'Light bends away from the normal when entering a denser medium.',
                answer: false,
                explanation: 'Light bends toward the normal when it enters a denser medium because it slows down.'
            },
            {
                q: 'Snell\'s law relates the angles of incidence and refraction.',
                answer: true,
                explanation: 'Snell\'s law is n₁ sin θ₁ = n₂ sin θ₂.'
            },
            {
                q: 'A convex lens is a diverging lens.',
                answer: false,
                explanation: 'A convex lens is a converging lens. A concave lens is diverging.'
            },
            {
                q: 'A real image can be projected onto a screen.',
                answer: true,
                explanation: 'Real images are formed by converging rays and can be projected onto a screen.'
            },
            {
                q: 'A plane mirror forms a virtual image.',
                answer: true,
                explanation: 'A plane mirror forms a virtual, upright image behind the mirror.'
            },
            {
                q: 'Total internal reflection can occur when light travels from a less dense medium to a denser medium.',
                answer: false,
                explanation: 'Total internal reflection occurs when light travels from a denser medium to a less dense medium above the critical angle.'
            },
            {
                q: 'A diverging lens can correct nearsightedness.',
                answer: true,
                explanation: 'A diverging lens spreads light and moves the image back onto the retina for a nearsighted eye.'
            },
            {
                q: 'A magnifying glass uses a converging lens.',
                answer: true,
                explanation: 'A magnifying glass uses a converging lens with the object within the focal length.'
            },
            {
                q: 'Virtual images can be projected onto a screen.',
                answer: false,
                explanation: 'Virtual images cannot be projected because the light rays do not actually converge at the image location.'
            }
        ],
        'Chapter13.html': [
            {
                q: 'Evapotranspiration combines evaporation from soil and transpiration from plants.',
                answer: true,
                explanation: 'Evapotranspiration is the combined loss of water through soil evaporation and plant transpiration.'
            },
            {
                q: 'A wind turbine converts electrical energy into the kinetic energy of wind.',
                answer: false,
                explanation: 'A wind turbine converts the kinetic energy of wind into electrical energy, not the reverse.'
            },
            {
                q: 'Ultrasonic testing can detect internal flaws without damaging materials.',
                answer: true,
                explanation: 'Ultrasonic waves reflect from internal defects, allowing non-destructive inspection.'
            },
            {
                q: 'MRI uses X-rays to form images.',
                answer: false,
                explanation: 'MRI uses strong magnetic fields and radio waves, not X-rays.'
            },
            {
                q: 'Radiocarbon dating uses carbon-14.',
                answer: true,
                explanation: 'Radiocarbon dating measures the decay of carbon-14 in organic remains.'
            },
            {
                q: 'Carbon-14 has a half-life of about 5,730 years.',
                answer: true,
                explanation: 'The half-life of carbon-14 is approximately 5,730 years.'
            },
            {
                q: 'A satellite in a circular orbit has zero acceleration.',
                answer: false,
                explanation: 'The satellite has centripetal acceleration directed toward Earth.'
            },
            {
                q: 'Photovoltaic cells convert sunlight directly into electrical energy.',
                answer: true,
                explanation: 'Solar photovoltaic cells convert light energy directly into electrical energy.'
            },
            {
                q: 'Medical ultrasound uses high-frequency sound waves.',
                answer: true,
                explanation: 'Ultrasound imaging uses high-frequency sound waves that reflect from tissues.'
            },
            {
                q: 'Darcy\'s law describes the flow of electric current through soil.',
                answer: false,
                explanation: 'Darcy\'s law describes the flow of water through a porous medium such as soil.'
            }
        ]
    };

    var currentFile = (window.location.pathname.split('/').pop() || '').split('?')[0].split('#')[0];
    var items = TRUE_FALSE[currentFile];

    if (!items || !items.length || document.getElementById('chapter-tf')) {
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
        return { answered: false, selected: null };
    });
    var score = 0;

    function questionMarkup(item, index) {
        return '<li class="quiz-question tf-question" data-question="' + index + '">' +
            '<div class="quiz-prompt" id="tf-prompt-' + index + '">' +
                '<span class="quiz-number" aria-hidden="true">' + (index + 1) + '</span>' +
                '<span>' + item.q + '</span>' +
            '</div>' +
            '<div class="tf-options" role="group" aria-labelledby="tf-prompt-' + index + '">' +
                '<button type="button" class="tf-option" data-choice="true">True</button>' +
                '<button type="button" class="tf-option" data-choice="false">False</button>' +
            '</div>' +
            '<div class="tf-feedback" role="status" aria-live="polite"></div>' +
        '</li>';
    }

    var section = document.createElement('section');
    section.className = 'chapter-quiz chapter-tf';
    section.id = 'chapter-tf';
    section.setAttribute('aria-labelledby', 'chapter-tf-title');
    section.innerHTML =
        '<div class="quiz-head">' +
            '<div class="quiz-heading">' +
                '<p class="quiz-kicker">Quick check</p>' +
                '<h2 class="quiz-title" id="chapter-tf-title">True or False</h2>' +
            '</div>' +
            '<div class="quiz-score-wrap">' +
                '<span class="quiz-score-label">Score</span>' +
                '<span class="quiz-score" data-tf-score aria-live="polite">0 / ' + items.length + '</span>' +
            '</div>' +
        '</div>' +
        '<div class="quiz-progress" aria-hidden="true"><div class="quiz-progress-bar" data-tf-progress></div></div>' +
        '<div class="quiz-body">' +
            '<ol class="quiz-list">' + items.map(questionMarkup).join('') + '</ol>' +
            '<div class="quiz-footer">' +
                '<p class="quiz-message" data-tf-message>Choose True or False for each statement.</p>' +
                '<button type="button" class="quiz-reset" data-tf-reset>Reset quiz</button>' +
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

    var scoreElement = section.querySelector('[data-tf-score]');
    var progressElement = section.querySelector('[data-tf-progress]');
    var messageElement = section.querySelector('[data-tf-message]');

    function updateScore() {
        var answered = state.filter(function (item) {
            return item.answered;
        }).length;

        scoreElement.textContent = score + ' / ' + items.length;
        progressElement.style.width = ((score / items.length) * 100) + '%';

        if (answered === 0) {
            messageElement.textContent = 'Choose True or False for each statement.';
        } else if (score === items.length) {
            messageElement.textContent = 'Perfect score. You have mastered this chapter.';
        } else if (score >= Math.ceil(items.length * 0.6)) {
            messageElement.textContent = 'Good work. Review the explanations for any missed statements.';
        } else {
            messageElement.textContent = 'Keep going. Read each explanation carefully and use reset to retest.';
        }
    }

    function answerQuestion(index, choice) {
        if (state[index].answered) {
            return;
        }

        var item = items[index];
        var questionElement = section.querySelector('[data-question="' + index + '"]');
        var options = questionElement.querySelectorAll('.tf-option');
        var feedback = questionElement.querySelector('.tf-feedback');
        var correct = choice === item.answer;

        state[index].answered = true;
        state[index].selected = choice;

        if (correct) {
            score += 1;
        }

        Array.prototype.forEach.call(options, function (option) {
            var optionValue = option.getAttribute('data-choice') === 'true';

            option.disabled = true;
            option.setAttribute('aria-disabled', 'true');

            if (optionValue === item.answer) {
                option.classList.add('is-correct');
            }

            if (optionValue === choice && !correct) {
                option.classList.add('is-wrong');
            }
        });

        feedback.classList.add('is-visible');
        feedback.classList.add(correct ? 'is-correct' : 'is-wrong');
        feedback.innerHTML = correct
            ? '<strong>Correct.</strong> ' + item.explanation
            : '<strong>Not quite.</strong> The statement is ' + (item.answer ? 'true' : 'false') + '. ' + item.explanation;

        updateScore();
    }

    function resetQuiz() {
        state = items.map(function () {
            return { answered: false, selected: null };
        });
        score = 0;

        Array.prototype.forEach.call(section.querySelectorAll('.tf-option'), function (option) {
            option.disabled = false;
            option.removeAttribute('aria-disabled');
            option.classList.remove('is-correct', 'is-wrong');
        });

        Array.prototype.forEach.call(section.querySelectorAll('.tf-feedback'), function (feedback) {
            feedback.className = 'tf-feedback';
            feedback.innerHTML = '';
        });

        updateScore();
    }

    section.addEventListener('click', function (event) {
        var option = event.target.closest ? event.target.closest('.tf-option') : null;

        if (option) {
            var questionElement = option.closest('.tf-question');
            var questionIndex = parseInt(questionElement.getAttribute('data-question'), 10);
            answerQuestion(questionIndex, option.getAttribute('data-choice') === 'true');
            return;
        }

        if (event.target.closest && event.target.closest('[data-tf-reset]')) {
            resetQuiz();
        }
    });

    updateScore();
})();
