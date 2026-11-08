(function () {
    'use strict';

    var QUIZZES = {
        'Chapter1.html': [
            {
                q: 'Which of the following is the SI unit of force?',
                options: ['Joule (J)', 'Newton (N)', 'Watt (W)', 'Pascal (Pa)'],
                answer: 1,
                explanation: 'The newton (N) is the SI unit of force. One newton is the force needed to give a 1 kg mass an acceleration of 1 m/s².'
            },
            {
                q: 'Which of the following is a vector quantity?',
                options: ['Distance', 'Speed', 'Displacement', 'Mass'],
                answer: 2,
                explanation: 'Displacement has both magnitude and direction, so it is a vector. Distance, speed, and mass are scalars.'
            },
            {
                q: 'How many significant figures are in the measurement 0.00450 m?',
                options: ['2', '3', '4', '5'],
                answer: 1,
                explanation: 'The leading zeros are not significant. The digits 4, 5, and the trailing zero are significant, giving three significant figures.'
            },
            {
                q: 'If vector A = 3i + 4j, what is the magnitude of A?',
                options: ['3', '4', '5', '7'],
                answer: 2,
                explanation: 'The magnitude is |A| = √(3² + 4²) = √25 = 5.'
            },
            {
                q: 'What is the dot product of two perpendicular nonzero vectors?',
                options: ['Zero', 'Positive', 'Negative', 'Equal to the product of their magnitudes'],
                answer: 0,
                explanation: 'For perpendicular vectors the angle is 90°, and cos 90° = 0, so the dot product is zero.'
            },
            {
                q: 'A length is measured as 12.3 ± 0.1 cm. What is the approximate percentage uncertainty?',
                options: ['0.08%', '0.8%', '8%', '12%'],
                answer: 1,
                explanation: 'Percentage uncertainty is (0.1/12.3) × 100% ≈ 0.8%.'
            },
            {
                q: 'Which of the following is a scalar quantity?',
                options: ['Velocity', 'Force', 'Work', 'Acceleration'],
                answer: 2,
                explanation: 'Work is a scalar because it has magnitude but no direction. Velocity, force, and acceleration are vectors.'
            },
            {
                q: 'What is the magnitude of the cross product of two perpendicular unit vectors?',
                options: ['0', '1', '√2', '2'],
                answer: 1,
                explanation: 'For perpendicular unit vectors, |A × B| = AB sin 90° = (1)(1)(1) = 1.'
            },
            {
                q: 'Which number equals 3.2 × 10⁴?',
                options: ['320', '3,200', '32,000', '320,000'],
                answer: 2,
                explanation: 'Multiplying 3.2 by 10⁴ moves the decimal point four places to the right, giving 32,000.'
            },
            {
                q: 'If A = 2i − 3j, what is A · i?',
                options: ['2', '−3', '√13', '0'],
                answer: 0,
                explanation: 'The dot product with unit vector i selects the x-component, so A · i = 2.'
            }
        ],
        'Chapter2.html': [
            {
                q: 'What does the slope of a position-time graph represent?',
                options: ['Acceleration', 'Velocity', 'Displacement', 'Jerk'],
                answer: 1,
                explanation: 'The slope of a position-time graph is the rate of change of position, which is velocity.'
            },
            {
                q: 'A car accelerates from rest to 20 m/s in 5 s. What is its average acceleration?',
                options: ['2 m/s²', '4 m/s²', '5 m/s²', '100 m/s²'],
                answer: 1,
                explanation: 'Average acceleration is Δv/Δt = (20 − 0)/5 = 4 m/s².'
            },
            {
                q: 'What does the area under a velocity-time graph represent?',
                options: ['Acceleration', 'Displacement', 'Average speed', 'Force'],
                answer: 1,
                explanation: 'The area under a velocity-time graph equals displacement. Areas below the time axis count as negative displacement.'
            },
            {
                q: 'An object is thrown straight upward. At its highest point, which statement is correct?',
                options: ['Velocity and acceleration are both zero', 'Velocity is zero and acceleration is 9.8 m/s² downward', 'Velocity is maximum and acceleration is zero', 'Velocity is zero and acceleration is 9.8 m/s² upward'],
                answer: 1,
                explanation: 'At the highest point the velocity is momentarily zero, but gravity still acts, so the acceleration is 9.8 m/s² downward.'
            },
            {
                q: 'An object falls from rest for 2 s. Taking g = 9.8 m/s², how far does it fall?',
                options: ['9.8 m', '19.6 m', '29.4 m', '39.2 m'],
                answer: 1,
                explanation: 'Using s = ½gt² = ½(9.8)(2²) = 19.6 m.'
            },
            {
                q: 'An object moves with constant velocity. What is its acceleration?',
                options: ['Zero', 'Constant but nonzero', 'Increasing', 'Equal to its velocity'],
                answer: 0,
                explanation: 'Constant velocity means the velocity is not changing, so acceleration is zero.'
            },
            {
                q: 'If an object\'s velocity and acceleration point in opposite directions, the object is:',
                options: ['Speeding up', 'Slowing down', 'Moving at constant speed', 'At rest'],
                answer: 1,
                explanation: 'Acceleration opposite to velocity reduces the speed, so the object is slowing down.'
            },
            {
                q: 'A runner covers 100 m in 20 s. What is the average speed?',
                options: ['0.2 m/s', '2 m/s', '5 m/s', '20 m/s'],
                answer: 2,
                explanation: 'Average speed = total distance / total time = 100/20 = 5 m/s.'
            },
            {
                q: 'Using v = u + at, find v when u = 5 m/s, a = 2 m/s², and t = 3 s.',
                options: ['6 m/s', '10 m/s', '11 m/s', '16 m/s'],
                answer: 2,
                explanation: 'v = u + at = 5 + (2)(3) = 11 m/s.'
            },
            {
                q: 'An object returns to its starting point after moving around a closed path. Which statement is correct?',
                options: ['Distance and displacement are both zero', 'Distance is zero but displacement is nonzero', 'Displacement is zero but distance is nonzero', 'Distance equals displacement'],
                answer: 2,
                explanation: 'Displacement depends only on the initial and final positions, so it is zero for a closed path. The distance traveled is nonzero.'
            }
        ],
        'Chapter3.html': [
            {
                q: 'For a projectile with no air resistance, what happens to its horizontal velocity?',
                options: ['It decreases steadily', 'It increases steadily', 'It remains constant', 'It becomes zero at the highest point'],
                answer: 2,
                explanation: 'No horizontal force acts on the projectile, so its horizontal velocity remains constant throughout the motion.'
            },
            {
                q: 'One ball is dropped from a height while another is thrown horizontally from the same height at the same time. Which hits the ground first?',
                options: ['The horizontally thrown ball', 'The dropped ball', 'They hit at the same time', 'It depends on their masses'],
                answer: 2,
                explanation: 'Vertical motion is independent of horizontal motion. Both balls fall the same vertical distance from rest, so they land at the same time.'
            },
            {
                q: 'In what direction does centripetal acceleration point?',
                options: ['Tangent to the circle', 'Away from the center', 'Toward the center', 'Along the velocity vector'],
                answer: 2,
                explanation: 'Centripetal acceleration always points toward the center of the circular path.'
            },
            {
                q: 'A boat points straight across a river while the current flows downstream. What is its actual path relative to the bank?',
                options: ['Straight across', 'Diagonally upstream', 'Diagonally downstream', 'It cannot cross'],
                answer: 2,
                explanation: 'The boat velocity and current add as vectors, so the resultant path is diagonal and downstream.'
            },
            {
                q: 'A projectile is launched at 20 m/s at 45° above the horizontal. Taking g = 9.8 m/s², what is its range?',
                options: ['20.4 m', '40.8 m', '81.6 m', '0 m'],
                answer: 1,
                explanation: 'R = v² sin(2θ)/g = (20²)(sin 90°)/9.8 = 400/9.8 ≈ 40.8 m.'
            },
            {
                q: 'What is the vertical acceleration of a projectile moving under gravity alone?',
                options: ['Zero', 'Constant and equal to g downward', 'Increasing downward', 'Equal to its horizontal velocity'],
                answer: 1,
                explanation: 'Ignoring air resistance, the only force is gravity, so the vertical acceleration is constant at g ≈ 9.8 m/s² downward.'
            },
            {
                q: 'At the highest point of a projectile\'s path, which quantity is zero?',
                options: ['Horizontal velocity', 'Vertical velocity', 'Acceleration', 'Range'],
                answer: 1,
                explanation: 'At the top of the path the vertical velocity is momentarily zero, while the horizontal velocity remains unchanged.'
            },
            {
                q: 'An object moves in uniform circular motion. Which statement is correct?',
                options: ['Its speed and velocity are both constant', 'Its speed is constant but velocity changes', 'Its velocity is constant but speed changes', 'Both speed and velocity change direction'],
                answer: 1,
                explanation: 'In uniform circular motion the speed is constant, but the direction of velocity continuously changes, so velocity is not constant.'
            },
            {
                q: 'Two projectiles are launched with the same speed at 30° and 60°. Ignoring air resistance, their ranges are:',
                options: ['Equal', 'The 30° projectile has twice the range', 'The 60° projectile has twice the range', 'Both zero'],
                answer: 0,
                explanation: 'Complementary launch angles give the same range when air resistance is ignored because R depends on sin(2θ), and sin 60° = sin 120°.'
            },
            {
                q: 'Car A moves east at 20 m/s and car B moves east at 10 m/s. What is the velocity of A relative to B?',
                options: ['10 m/s east', '10 m/s west', '30 m/s east', '30 m/s west'],
                answer: 0,
                explanation: 'Relative velocity is v_A − v_B = 20 − 10 = 10 m/s east.'
            }
        ],
        'Chapter4.html': [
            {
                q: 'Which statement best describes Newton\'s first law?',
                options: ['F = ma', 'An object resists changes in motion unless a net external force acts on it', 'Every action has an equal and opposite reaction', 'Energy is always conserved'],
                answer: 1,
                explanation: 'Newton\'s first law is the law of inertia: an object remains at rest or in uniform motion unless acted on by a net external force.'
            },
            {
                q: 'A net force of 20 N acts on a 5 kg object. What is its acceleration?',
                options: ['0.25 m/s²', '4 m/s²', '5 m/s²', '100 m/s²'],
                answer: 1,
                explanation: 'From F = ma, a = F/m = 20/5 = 4 m/s².'
            },
            {
                q: 'Action-reaction force pairs described by Newton\'s third law:',
                options: ['Act on the same object', 'Act on different objects', 'Always cancel each other on one object', 'Only exist when objects are at rest'],
                answer: 1,
                explanation: 'Action and reaction forces are equal and opposite but act on different objects, so they do not cancel on the same object.'
            },
            {
                q: 'In which direction does kinetic friction act on a sliding object?',
                options: ['In the direction of motion', 'Opposite to the relative motion', 'Always upward', 'It is always zero'],
                answer: 1,
                explanation: 'Kinetic friction opposes the relative sliding motion between surfaces.'
            },
            {
                q: 'What happens to a falling object when it reaches terminal velocity?',
                options: ['The net force is maximum', 'Drag equals weight, so acceleration becomes zero', 'The object stops moving', 'Gravity disappears'],
                answer: 1,
                explanation: 'At terminal velocity the upward drag force balances the downward weight, so the net force and acceleration are zero and the velocity stays constant.'
            },
            {
                q: 'What is the weight of a 10 kg object near Earth\'s surface? (g = 9.8 m/s²)',
                options: ['10 N', '19.6 N', '98 N', '980 N'],
                answer: 2,
                explanation: 'Weight is W = mg = (10)(9.8) = 98 N.'
            },
            {
                q: 'An object rests on a horizontal surface with no vertical acceleration. How does the normal force compare with the object\'s weight?',
                options: ['Normal force is zero', 'Normal force equals the weight', 'Normal force is greater than the weight', 'Normal force is less than the weight'],
                answer: 1,
                explanation: 'With no vertical acceleration, the upward normal force must balance the downward weight, so the two are equal in magnitude.'
            },
            {
                q: 'Static friction between an object and a surface:',
                options: ['Always equals the maximum friction value', 'Adjusts to prevent motion up to a maximum value', 'Acts in the direction of intended motion', 'Is always zero'],
                answer: 1,
                explanation: 'Static friction adjusts its magnitude to oppose the applied force and prevent sliding, up to a maximum value.'
            },
            {
                q: 'For a system, the direction of acceleration is always:',
                options: ['Opposite the net force', 'The same as the net force', 'Perpendicular to the net force', 'The same as the velocity'],
                answer: 1,
                explanation: 'Newton\'s second law, F_net = ma, shows that acceleration is in the same direction as the net force.'
            },
            {
                q: 'An elevator accelerates downward. How does a passenger\'s apparent weight compare with their true weight?',
                options: ['It is greater', 'It is less', 'It is equal', 'It becomes zero'],
                answer: 1,
                explanation: 'When the elevator accelerates downward, the normal force from the floor is less than the passenger\'s true weight, so the apparent weight decreases.'
            }
        ],
        'Chapter5.html': [
            {
                q: 'How does the gravitational force between two masses depend on their separation?',
                options: ['F ∝ r', 'F ∝ 1/r', 'F ∝ 1/r²', 'F ∝ r²'],
                answer: 2,
                explanation: 'Newton\'s law of gravitation gives F = Gm₁m₂/r², so the force is inversely proportional to the square of the separation.'
            },
            {
                q: 'If the distance between two masses is doubled, the gravitational force becomes:',
                options: ['Twice as large', 'Half as large', 'One quarter as large', 'Four times as large'],
                answer: 2,
                explanation: 'Since F ∝ 1/r², doubling r reduces the force by a factor of 2² = 4.'
            },
            {
                q: 'What does Kepler\'s first law state?',
                options: ['Planets move in circles with the Sun at the center', 'Planets move in ellipses with the Sun at one focus', 'Planets move in parabolic paths', 'Planets move at constant speed'],
                answer: 1,
                explanation: 'Kepler\'s first law says each planet moves in an ellipse with the Sun at one of the foci.'
            },
            {
                q: 'According to Kepler\'s second law, a planet moves fastest when it is:',
                options: ['Farthest from the Sun', 'Closest to the Sun', 'At the same speed everywhere', 'At the end of its major axis'],
                answer: 1,
                explanation: 'Equal areas are swept in equal times, so the planet moves faster when it is closer to the Sun.'
            },
            {
                q: 'What is the orbital period of a geostationary satellite?',
                options: ['1 hour', '24 hours', '365 days', '12 hours'],
                answer: 1,
                explanation: 'A geostationary satellite orbits once every 24 hours, matching Earth\'s rotation, so it stays above the same point on the equator.'
            },
            {
                q: 'What is the gravitational field strength near Earth\'s surface?',
                options: ['9.8 N/kg', '9.8 m/s', '9.8 N', '9.8 kg/m³'],
                answer: 0,
                explanation: 'Near Earth\'s surface the gravitational field strength is about 9.8 N/kg, which is equivalent to 9.8 m/s².'
            },
            {
                q: 'Earth pulls on the Moon with a gravitational force F. What is the magnitude of the force the Moon exerts on Earth?',
                options: ['Zero', 'F', 'Greater than F', 'Less than F'],
                answer: 1,
                explanation: 'By Newton\'s third law, the Moon pulls on Earth with an equal and opposite force of magnitude F.'
            },
            {
                q: 'Kepler\'s third law relates a planet\'s orbital period T to its average orbital radius r as:',
                options: ['T ∝ r', 'T² ∝ r³', 'T³ ∝ r²', 'T ∝ 1/r'],
                answer: 1,
                explanation: 'Kepler\'s third law states that the square of the orbital period is proportional to the cube of the average orbital radius: T² ∝ r³.'
            },
            {
                q: 'A satellite in a circular orbit has:',
                options: ['Constant speed and constant velocity', 'Constant speed but changing velocity', 'Changing speed and constant velocity', 'Zero acceleration'],
                answer: 1,
                explanation: 'The satellite\'s speed is constant, but its velocity direction changes continuously. It also has centripetal acceleration.'
            },
            {
                q: 'What is the escape velocity from Earth\'s surface?',
                options: ['1.1 km/s', '11.2 km/s', '112 km/s', '1,120 km/s'],
                answer: 1,
                explanation: 'The escape velocity from Earth is about 11.2 km/s, the minimum speed needed to escape Earth\'s gravitational field without further propulsion.'
            }
        ],
        'Chapter6.html': [
            {
                q: 'How much work is done by a force acting perpendicular to the displacement?',
                options: ['Maximum work', 'Zero work', 'Negative work', 'Work equal to the force'],
                answer: 1,
                explanation: 'Work is W = Fd cos θ. For θ = 90°, cos 90° = 0, so no work is done.'
            },
            {
                q: 'What does the work-energy theorem state?',
                options: ['Net work equals the change in kinetic energy', 'Net work equals the change in momentum', 'Net work equals power multiplied by time', 'Net work equals mass multiplied by acceleration'],
                answer: 0,
                explanation: 'The work-energy theorem states that the net work done on an object equals its change in kinetic energy.'
            },
            {
                q: 'Which unit is used for power?',
                options: ['Joule', 'Newton', 'Watt', 'Pascal'],
                answer: 2,
                explanation: 'Power is the rate of doing work, measured in watts (W). One watt equals one joule per second.'
            },
            {
                q: 'What is the kinetic energy of a 2 kg object moving at 3 m/s?',
                options: ['3 J', '6 J', '9 J', '18 J'],
                answer: 2,
                explanation: 'KE = ½mv² = ½(2)(3²) = 9 J.'
            },
            {
                q: 'Mechanical energy is conserved when:',
                options: ['Friction acts on the object', 'Only conservative forces do work', 'An external force does work', 'The object is at rest'],
                answer: 1,
                explanation: 'Mechanical energy is conserved when only conservative forces, such as gravity and spring forces, do work.'
            },
            {
                q: 'How much work is done by a 100 N force acting over 5 m in the direction of motion?',
                options: ['20 J', '100 J', '500 J', '505 J'],
                answer: 2,
                explanation: 'W = Fd cos θ = (100)(5)(cos 0°) = 500 J.'
            },
            {
                q: 'A machine does 600 J of work in 3 s. What is its power output?',
                options: ['200 W', '603 W', '1,800 W', '0.005 W'],
                answer: 0,
                explanation: 'Power is P = W/t = 600/3 = 200 W.'
            },
            {
                q: 'What is the gravitational potential energy of a 2 kg object at a height of 5 m? (g = 9.8 m/s²)',
                options: ['9.8 J', '49 J', '98 J', '196 J'],
                answer: 2,
                explanation: 'PE = mgh = (2)(9.8)(5) = 98 J.'
            },
            {
                q: 'A stretched spring stores:',
                options: ['Chemical energy', 'Elastic potential energy', 'Nuclear energy', 'Thermal energy only'],
                answer: 1,
                explanation: 'A deformed spring stores elastic potential energy, which can be converted back into kinetic energy when released.'
            },
            {
                q: 'If an object\'s speed doubles while its mass stays the same, its kinetic energy:',
                options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
                answer: 2,
                explanation: 'Kinetic energy is KE = ½mv², so doubling v increases KE by a factor of 2² = 4.'
            }
        ],
        'Chapter7.html': [
            {
                q: 'Impulse is equal to:',
                options: ['The change in kinetic energy', 'The change in momentum', 'Force divided by time', 'Mass multiplied by acceleration'],
                answer: 1,
                explanation: 'Impulse J = FΔt equals the change in momentum, Δp.'
            },
            {
                q: 'Which quantities are conserved in a perfectly elastic collision?',
                options: ['Only momentum', 'Only kinetic energy', 'Both momentum and kinetic energy', 'Neither momentum nor kinetic energy'],
                answer: 2,
                explanation: 'In an elastic collision both momentum and kinetic energy are conserved. In an inelastic collision only momentum is conserved.'
            },
            {
                q: 'Two skaters initially at rest push apart. What happens to their total momentum?',
                options: ['It increases', 'It remains zero', 'It decreases', 'It becomes negative'],
                answer: 1,
                explanation: 'The initial total momentum is zero. With no external horizontal force, the total momentum remains zero after they push apart.'
            },
            {
                q: 'Where is the center of mass of a uniform meter stick?',
                options: ['0 cm', '25 cm', '50 cm', '100 cm'],
                answer: 2,
                explanation: 'A uniform meter stick has its mass evenly distributed, so its center of mass is at its midpoint, 50 cm.'
            },
            {
                q: 'What is the momentum of a 2 kg object moving at 3 m/s?',
                options: ['1.5 kg·m/s', '5 kg·m/s', '6 kg·m/s', '9 kg·m/s'],
                answer: 2,
                explanation: 'Momentum is p = mv = (2)(3) = 6 kg·m/s.'
            },
            {
                q: 'Momentum is a vector quantity whose direction is the same as:',
                options: ['Acceleration', 'Velocity', 'Force', 'Displacement'],
                answer: 1,
                explanation: 'Momentum is p = mv, so it points in the same direction as the velocity.'
            },
            {
                q: 'In a perfectly inelastic collision, the colliding objects:',
                options: ['Bounce apart without losing kinetic energy', 'Stick together and kinetic energy is not conserved', 'Always stop completely', 'Conserve kinetic energy but not momentum'],
                answer: 1,
                explanation: 'In a perfectly inelastic collision the objects stick together; momentum is conserved, but some kinetic energy is converted to other forms.'
            },
            {
                q: 'A gun recoils when fired. This is best explained by:',
                options: ['Newton\'s first law', 'Conservation of momentum', 'Conservation of charge', 'The work-energy theorem'],
                answer: 1,
                explanation: 'Before firing, the total momentum is zero. The forward momentum of the bullet is balanced by the backward momentum of the gun.'
            },
            {
                q: 'What is the SI unit of impulse?',
                options: ['N·s', 'J', 'W', 'kg/m³'],
                answer: 0,
                explanation: 'Impulse is force multiplied by time, so its SI unit is the newton-second (N·s), equivalent to kg·m/s.'
            },
            {
                q: 'Can the center of mass of an object lie outside the object itself?',
                options: ['No, never', 'Yes, for example with a ring or hollow shape', 'Only for objects at rest', 'Only if the object is a sphere'],
                answer: 1,
                explanation: 'The center of mass can lie outside the material of an object, such as at the center of a ring or a hollow shape.'
            }
        ],
        'Chapter8.html': [
            {
                q: 'At the same depth in a connected static fluid, how does pressure compare?',
                options: ['It depends on the container shape', 'It is the same at all points at that depth', 'It is greater in a wider container', 'It is zero'],
                answer: 1,
                explanation: 'In a static fluid, pressure at a given depth is the same at all points at that depth, regardless of the container shape.'
            },
            {
                q: 'According to Archimedes\' principle, the buoyant force equals:',
                options: ['The weight of the object', 'The weight of the displaced fluid', 'The volume of the object', 'The density of the object'],
                answer: 1,
                explanation: 'The buoyant force equals the weight of the fluid displaced by the object.'
            },
            {
                q: 'In a horizontal pipe, what happens to fluid speed where the pipe narrows?',
                options: ['It decreases', 'It increases', 'It stays constant', 'It becomes zero'],
                answer: 1,
                explanation: 'The equation of continuity, A₁v₁ = A₂v₂, means a smaller cross-sectional area produces a higher fluid speed.'
            },
            {
                q: 'For steady flow through a horizontal pipe, Bernoulli\'s equation predicts that where speed is higher, pressure is:',
                options: ['Higher', 'Lower', 'Unchanged', 'Zero'],
                answer: 1,
                explanation: 'For a horizontal pipe, an increase in fluid speed is accompanied by a decrease in pressure.'
            },
            {
                q: 'An object will float in a fluid when its average density is:',
                options: ['Greater than the fluid density', 'Equal to or less than the fluid density', 'Always greater than the fluid density', 'Zero'],
                answer: 1,
                explanation: 'An object floats when its average density is less than or equal to the fluid density, so the buoyant force can support its weight.'
            },
            {
                q: 'What is the SI unit of pressure?',
                options: ['Newton (N)', 'Pascal (Pa)', 'Joule (J)', 'Watt (W)'],
                answer: 1,
                explanation: 'Pressure is force per unit area, so its SI unit is the pascal (Pa), where 1 Pa = 1 N/m².'
            },
            {
                q: 'Gauge pressure is defined as:',
                options: ['Absolute pressure plus atmospheric pressure', 'Absolute pressure minus atmospheric pressure', 'The same as absolute pressure', 'Always zero'],
                answer: 1,
                explanation: 'Gauge pressure measures pressure relative to atmospheric pressure: P_gauge = P_absolute − P_atm.'
            },
            {
                q: 'The buoyant force on a submerged object depends on:',
                options: ['The object\'s weight only', 'The fluid density and the displaced volume', 'The object\'s color', 'The depth only'],
                answer: 1,
                explanation: 'Archimedes\' principle gives F_b = ρ_fluid V_displaced g, so the buoyant force depends on fluid density and displaced volume.'
            },
            {
                q: 'Bernoulli\'s equation expresses conservation of:',
                options: ['Charge', 'Energy per unit volume for flowing fluid', 'Momentum only', 'Mass only'],
                answer: 1,
                explanation: 'Bernoulli\'s equation is an energy conservation statement for an ideal fluid, combining pressure, kinetic, and potential energy per unit volume.'
            },
            {
                q: 'Young\'s modulus is defined as:',
                options: ['Strain divided by stress', 'Stress divided by strain', 'Force multiplied by area', 'Volume divided by pressure'],
                answer: 1,
                explanation: 'Young\'s modulus Y = stress/strain. A larger value means the material is stiffer and resists elastic deformation more strongly.'
            }
        ],
        'Chapter9.html': [
            {
                q: 'The Zeroth Law of Thermodynamics implies that:',
                options: ['If A is in equilibrium with C and B is in equilibrium with C, then A and B have the same temperature', 'Heat always flows from cold to hot', 'Energy can be created', 'Entropy always decreases'],
                answer: 0,
                explanation: 'The Zeroth Law establishes that systems in thermal equilibrium with a third system are in thermal equilibrium with each other, so they share the same temperature.'
            },
            {
                q: 'What is 25°C in kelvin?',
                options: ['248.15 K', '273.15 K', '298.15 K', '310.15 K'],
                answer: 2,
                explanation: 'T_K = T_C + 273.15 = 25 + 273.15 = 298.15 K.'
            },
            {
                q: 'Which equation describes linear thermal expansion?',
                options: ['ΔL = αL₀ΔT', 'ΔL = αL₀/ΔT', 'ΔL = αΔT/L₀', 'ΔL = L₀/(αΔT)'],
                answer: 0,
                explanation: 'The change in length is ΔL = αL₀ΔT, where α is the coefficient of linear expansion.'
            },
            {
                q: 'Which heat transfer mechanism can occur through a vacuum?',
                options: ['Conduction', 'Convection', 'Radiation', 'All three equally'],
                answer: 2,
                explanation: 'Radiation transfers energy through electromagnetic waves and does not require a medium, so it can occur through a vacuum.'
            },
            {
                q: 'A system absorbs 500 J of heat and does 200 J of work. What is its change in internal energy?',
                options: ['100 J', '300 J', '500 J', '700 J'],
                answer: 1,
                explanation: 'Using ΔU = Q − W gives ΔU = 500 − 200 = 300 J.'
            },
            {
                q: 'During a phase change at constant pressure, the temperature of a pure substance:',
                options: ['Increases steadily', 'Decreases steadily', 'Remains constant while heat is added or removed', 'Becomes zero'],
                answer: 2,
                explanation: 'During a phase change, added or removed heat changes the arrangement of particles rather than the temperature, so the temperature remains constant.'
            },
            {
                q: 'Which heat transfer mechanism requires the movement of a fluid?',
                options: ['Conduction', 'Convection', 'Radiation', 'None of these'],
                answer: 1,
                explanation: 'Convection transfers heat through the bulk movement of a fluid, such as rising warm air or circulating water.'
            },
            {
                q: 'Why does water usually heat up more slowly than metals?',
                options: ['Water has a higher specific heat capacity', 'Water has a lower specific heat capacity', 'Water cannot absorb heat', 'Water has no internal energy'],
                answer: 0,
                explanation: 'Water has a relatively high specific heat capacity, so it requires more heat to raise its temperature by 1°C than the same mass of most metals.'
            },
            {
                q: 'Absolute zero is equal to:',
                options: ['0°C', '0 K', '100 K', '273.15 K'],
                answer: 1,
                explanation: 'Absolute zero is 0 K, which is approximately −273.15°C, the lowest possible thermodynamic temperature.'
            },
            {
                q: 'In the First Law expression ΔU = Q − W, what does a negative value of W represent?',
                options: ['Heat removed from the system', 'Work done by the system', 'Work done on the system', 'No energy transfer'],
                answer: 2,
                explanation: 'The convention used is W > 0 for work done by the system, so W < 0 means work is done on the system.'
            }
        ],
        'Chapter10.html': [
            {
                q: 'In simple harmonic motion, the acceleration is:',
                options: ['Constant in magnitude and direction', 'Proportional to displacement and directed toward equilibrium', 'Independent of displacement', 'Always zero'],
                answer: 1,
                explanation: 'SHM is defined by a = −ω²x, so acceleration is proportional to displacement and directed toward the equilibrium position.'
            },
            {
                q: 'For small oscillations, the period of a simple pendulum depends on:',
                options: ['The mass of the bob', 'The amplitude only', 'The length of the pendulum and g', 'The color of the bob'],
                answer: 2,
                explanation: 'For small amplitudes, T = 2π√(L/g), so the period depends on the pendulum length and gravitational acceleration, not the mass.'
            },
            {
                q: 'Which relationship correctly gives wave speed?',
                options: ['v = f/λ', 'v = fλ', 'v = λ/f', 'v = f + λ'],
                answer: 1,
                explanation: 'Wave speed equals frequency multiplied by wavelength: v = fλ.'
            },
            {
                q: 'For a string fixed at both ends, the fundamental standing wave has a wavelength of:',
                options: ['λ = L', 'λ = 2L', 'λ = L/2', 'λ = 4L'],
                answer: 1,
                explanation: 'The fundamental mode has one half-wavelength fitting on the string, so L = λ/2 and λ = 2L.'
            },
            {
                q: 'An ambulance sounding its siren approaches a stationary observer. The observer hears a frequency that is:',
                options: ['Lower than the emitted frequency', 'Higher than the emitted frequency', 'The same as the emitted frequency', 'Zero'],
                answer: 1,
                explanation: 'Due to the Doppler effect, the waves are compressed as the source approaches, so the observed frequency is higher.'
            },
            {
                q: 'How are frequency f and period T related?',
                options: ['f = T', 'f = 1/T', 'f = T²', 'f = 2πT'],
                answer: 1,
                explanation: 'Frequency is the number of cycles per second, and period is the time per cycle, so f = 1/T.'
            },
            {
                q: 'In a longitudinal wave, the particles of the medium oscillate:',
                options: ['Perpendicular to the wave direction', 'Parallel to the wave direction', 'In circles', 'Not at all'],
                answer: 1,
                explanation: 'In a longitudinal wave, particle displacement is parallel to the direction of wave propagation, as in sound waves.'
            },
            {
                q: 'Which wave cannot travel through a vacuum?',
                options: ['Light', 'Radio wave', 'Sound wave', 'X-ray'],
                answer: 2,
                explanation: 'Sound is a mechanical wave and requires a medium, so it cannot travel through a vacuum. Electromagnetic waves can.'
            },
            {
                q: 'Resonance occurs when:',
                options: ['The driving frequency equals the natural frequency', 'The driving frequency is zero', 'Damping is infinite', 'The amplitude is zero'],
                answer: 0,
                explanation: 'Resonance occurs when a system is driven at its natural frequency, producing a large amplitude response.'
            },
            {
                q: 'For a string under tension, increasing the tension generally:',
                options: ['Decreases the wave speed', 'Increases the wave speed', 'Has no effect on wave speed', 'Makes the string longitudinal'],
                answer: 1,
                explanation: 'Wave speed on a string is v = √(T/μ), so increasing tension T increases the wave speed.'
            }
        ],
        'Chapter11.html': [
            {
                q: 'How does the electric force between two point charges depend on their separation?',
                options: ['F ∝ r', 'F ∝ 1/r', 'F ∝ 1/r²', 'F ∝ r²'],
                answer: 2,
                explanation: 'Coulomb\'s law gives F = kq₁q₂/r², so the force is inversely proportional to the square of the separation.'
            },
            {
                q: 'Which equation expresses Ohm\'s law?',
                options: ['V = IR', 'V = I/R', 'V = R/I', 'V = I²R'],
                answer: 0,
                explanation: 'Ohm\'s law states that voltage equals current multiplied by resistance: V = IR.'
            },
            {
                q: 'How does the equivalent resistance of resistors in parallel compare with the individual resistances?',
                options: ['It is greater than the largest resistance', 'It is less than the smallest resistance', 'It equals the sum of the resistances', 'It equals the largest resistance'],
                answer: 1,
                explanation: 'For parallel resistors, the equivalent resistance is always less than the smallest individual resistance.'
            },
            {
                q: 'Kirchhoff\'s junction rule is based on the conservation of:',
                options: ['Energy', 'Charge', 'Momentum', 'Mass'],
                answer: 1,
                explanation: 'The junction rule states that the total current entering a junction equals the total current leaving it, which follows from conservation of charge.'
            },
            {
                q: 'Lenz\'s law states that an induced current:',
                options: ['Aids the change in magnetic flux', 'Opposes the change in magnetic flux', 'Is always zero', 'Equals the magnetic field strength'],
                answer: 1,
                explanation: 'Lenz\'s law says the induced current creates a magnetic field that opposes the change in flux that produced it.'
            },
            {
                q: 'The electric field lines around a positive point charge point:',
                options: ['Radially inward', 'Radially outward', 'In circles around the charge', 'Parallel to the charge'],
                answer: 1,
                explanation: 'Electric field lines point away from positive charges and toward negative charges.'
            },
            {
                q: 'What is the SI unit of capacitance?',
                options: ['Ohm (Ω)', 'Farad (F)', 'Tesla (T)', 'Henry (H)'],
                answer: 1,
                explanation: 'Capacitance is measured in farads (F), where 1 F = 1 coulomb per volt.'
            },
            {
                q: 'Which equation gives electrical power?',
                options: ['P = IV', 'P = I/V', 'P = V/I', 'P = I²/V'],
                answer: 0,
                explanation: 'Electrical power is the product of current and voltage, P = IV. It can also be written as P = I²R or P = V²/R.'
            },
            {
                q: 'What magnetic force acts on a stationary electric charge in a magnetic field?',
                options: ['Maximum force', 'Zero force', 'Force parallel to the field', 'Force opposite to the field'],
                answer: 1,
                explanation: 'The magnetic force is F = qvB sin θ, so a stationary charge (v = 0) experiences no magnetic force.'
            },
            {
                q: 'A diode in forward bias:',
                options: ['Blocks current completely', 'Allows current to flow more easily in one direction', 'Acts as a capacitor', 'Produces a magnetic field only'],
                answer: 1,
                explanation: 'A forward-biased diode has a low resistance and allows current to flow in its forward direction, while blocking current in reverse bias.'
            }
        ],
        'Chapter12.html': [
            {
                q: 'Which statement describes the law of reflection?',
                options: ['The angle of incidence is greater than the angle of reflection', 'The angle of incidence equals the angle of reflection', 'The angle of incidence is less than the angle of reflection', 'There is no relationship between the angles'],
                answer: 1,
                explanation: 'For reflection at a smooth surface, the angle of incidence equals the angle of reflection, both measured from the normal.'
            },
            {
                q: 'When light travels from air into a denser medium such as glass, it:',
                options: ['Bends away from the normal', 'Bends toward the normal', 'Does not change direction', 'Reflects completely'],
                answer: 1,
                explanation: 'Light slows down in a denser medium and bends toward the normal, according to Snell\'s law.'
            },
            {
                q: 'A convex lens is also called a:',
                options: ['Diverging lens', 'Converging lens', 'Plane lens', 'Polarizing lens'],
                answer: 1,
                explanation: 'A convex lens is thicker in the middle and converges parallel rays of light to a focal point.'
            },
            {
                q: 'Total internal reflection can occur when light travels:',
                options: ['From a denser medium to a less dense medium above the critical angle', 'From a less dense medium to a denser medium above the critical angle', 'At any angle between two media', 'Only from a mirror surface'],
                answer: 0,
                explanation: 'Total internal reflection occurs when light moves from a denser to a less dense medium and the angle of incidence exceeds the critical angle.'
            },
            {
                q: 'Nearsightedness (myopia) is corrected using a:',
                options: ['Converging lens', 'Diverging lens', 'Plane mirror', 'Prism'],
                answer: 1,
                explanation: 'A diverging (concave) lens spreads the light before it enters the eye, moving the image back onto the retina.'
            },
            {
                q: 'Which equation represents Snell\'s law?',
                options: ['n₁ sin θ₁ = n₂ sin θ₂', 'n₁ cos θ₁ = n₂ cos θ₂', 'n₁θ₁ = n₂θ₂', 'n₁ + θ₁ = n₂ + θ₂'],
                answer: 0,
                explanation: 'Snell\'s law is n₁ sin θ₁ = n₂ sin θ₂, where the angles are measured from the normal.'
            },
            {
                q: 'A real image formed by a lens:',
                options: ['Cannot be projected on a screen', 'Can be projected on a screen', 'Is always upright', 'Is always larger than the object'],
                answer: 1,
                explanation: 'A real image is formed by actually converging rays, so it can be projected onto a screen. Virtual images cannot be projected.'
            },
            {
                q: 'The image formed by a plane mirror is:',
                options: ['Real, inverted, and larger', 'Virtual, upright, and the same size', 'Real, upright, and smaller', 'Virtual and inverted'],
                answer: 1,
                explanation: 'A plane mirror forms a virtual, upright image of the same size, located the same distance behind the mirror as the object is in front.'
            },
            {
                q: 'A concave mirror can form:',
                options: ['Only real images', 'Only virtual images', 'Real or virtual images depending on object distance', 'No images at all'],
                answer: 2,
                explanation: 'A concave mirror can form a real image when the object is beyond the focal point and a virtual image when the object is inside the focal point.'
            },
            {
                q: 'A magnifying glass uses a converging lens with the object placed:',
                options: ['Beyond twice the focal length', 'At exactly twice the focal length', 'Within the focal length', 'At the center of curvature'],
                answer: 2,
                explanation: 'A magnifying glass places the object within the focal length of a converging lens, producing an enlarged, upright virtual image.'
            }
        ],
        'Chapter13.html': [
            {
                q: 'Which principle describes the flow of water through soil?',
                options: ['Darcy\'s law', 'Ohm\'s law', 'Boyle\'s law', 'Snell\'s law'],
                answer: 0,
                explanation: 'Darcy\'s law relates the flow rate of water through a porous medium to the hydraulic gradient and the medium\'s permeability.'
            },
            {
                q: 'Ultrasonic testing is commonly used in industry to:',
                options: ['Measure temperature', 'Detect internal flaws in materials', 'Measure light intensity', 'Produce X-rays'],
                answer: 1,
                explanation: 'Ultrasonic waves reflect from internal boundaries and defects, allowing inspectors to detect cracks and flaws without damaging the material.'
            },
            {
                q: 'Magnetic resonance imaging (MRI) relies mainly on:',
                options: ['Strong magnetic fields and radio waves', 'X-rays only', 'Gamma rays only', 'Sound waves only'],
                answer: 0,
                explanation: 'MRI uses strong magnetic fields and radio-frequency pulses to align and excite hydrogen nuclei, producing detailed images of soft tissue.'
            },
            {
                q: 'Radiocarbon dating is based on the decay of:',
                options: ['Carbon-14', 'Uranium-238 only', 'Potassium-40 only', 'Carbon-12'],
                answer: 0,
                explanation: 'Radiocarbon dating measures the decay of carbon-14, which has a half-life of about 5,730 years, to estimate the age of organic remains.'
            },
            {
                q: 'For a satellite in a circular orbit, the centripetal force is provided by:',
                options: ['Gravity', 'Air resistance', 'The satellite\'s engines', 'The Sun\'s light pressure'],
                answer: 0,
                explanation: 'Earth\'s gravitational pull provides the centripetal force that keeps the satellite moving in its circular orbit.'
            },
            {
                q: 'The combined loss of water from soil evaporation and plant transpiration is called:',
                options: ['Condensation', 'Evapotranspiration', 'Precipitation', 'Infiltration'],
                answer: 1,
                explanation: 'Evapotranspiration is the combined process of evaporation from the soil and transpiration from plants.'
            },
            {
                q: 'A wind turbine converts:',
                options: ['Chemical energy to electrical energy', 'Kinetic energy of wind to electrical energy', 'Nuclear energy to thermal energy', 'Electrical energy to sound energy'],
                answer: 1,
                explanation: 'A wind turbine extracts kinetic energy from moving air and converts it into electrical energy.'
            },
            {
                q: 'Medical ultrasound imaging uses:',
                options: ['High-frequency sound waves', 'X-rays only', 'Gamma rays only', 'Static magnetic fields only'],
                answer: 0,
                explanation: 'Ultrasound imaging uses high-frequency sound waves that reflect from boundaries between tissues to form images.'
            },
            {
                q: 'Radiocarbon dating is most useful for dating:',
                options: ['Rocks older than 1 billion years', 'Organic remains up to about 50,000 years old', 'Metals only', 'Living organisms only'],
                answer: 1,
                explanation: 'Carbon-14 has a half-life of about 5,730 years, making radiocarbon dating useful for organic material up to roughly 50,000 years old.'
            },
            {
                q: 'A satellite remains in orbit around Earth because:',
                options: ['Gravity is zero in space', 'It is in continuous free fall around Earth', 'Its engines push it continuously', 'Air resistance holds it up'],
                answer: 1,
                explanation: 'A satellite is in continuous free fall toward Earth while its tangential velocity carries it around the planet, producing an orbit.'
            }
        ]
    };

    var currentFile = (window.location.pathname.split('/').pop() || '').split('?')[0].split('#')[0];

    function normalizeQuestionText(text) {
        return String(text)
            .replace(/\\\(|\\\)|\\\[|\\\]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function initializeQuestionBank() {
        document.body.classList.add('question-bank-page');

        var groups = [];
        var allQuestions = [];
        var chapterHeadings = document.querySelectorAll('h2');

        Array.prototype.forEach.call(chapterHeadings, function (heading) {
            var chapterMatch = (heading.textContent || '').match(/^\s*Chapter\s+(\d+)\s*:/i);

            if (!chapterMatch) {
                return;
            }

            var chapterNumber = parseInt(chapterMatch[1], 10);
            var chapterQuestions = QUIZZES['Chapter' + chapterNumber + '.html'];
            var concept = heading.nextElementSibling;

            if (!concept || !concept.classList.contains('concept') || !chapterQuestions) {
                return;
            }

            var group = {
                heading: heading,
                concept: concept,
                questions: []
            };

            Array.prototype.forEach.call(concept.querySelectorAll('.quiz-question'), function (questionElement) {
                var prompt = questionElement.querySelector('.quiz-prompt');
                var promptText = prompt ? (prompt.textContent || '').replace(/^\s*\d+\s*/, '') : '';
                var matchingQuestions = chapterQuestions.filter(function (question) {
                    return normalizeQuestionText(question.q) === normalizeQuestionText(promptText);
                });
                var optionsContainer = questionElement.querySelector('.quiz-options');
                var optionItems = optionsContainer ? optionsContainer.querySelectorAll('li') : [];
                var optionTexts = Array.prototype.map.call(optionItems, function (option) {
                    return (option.textContent || '').trim();
                });
                var feedback = questionElement.querySelector('.quiz-feedback');
                var questionData = matchingQuestions.length === 1 ? matchingQuestions[0] : null;
                var answerIsValid = questionData &&
                    optionTexts.length === questionData.options.length &&
                    questionData.answer >= 0 &&
                    questionData.answer < optionTexts.length &&
                    normalizeQuestionText(optionTexts[questionData.answer]) ===
                        normalizeQuestionText(questionData.options[questionData.answer]);

                if (!questionData || !answerIsValid || !optionsContainer || !feedback) {
                    if (feedback) {
                        feedback.textContent = 'Answer key unavailable for this question. Please report this issue.';
                        feedback.classList.add('is-visible', 'is-error');
                    }
                    console.error('Question bank answer key could not be matched:', promptText);
                    return;
                }

                var groupLabelId = optionsContainer.getAttribute('aria-labelledby');

                if (prompt && groupLabelId) {
                    prompt.id = groupLabelId;
                }

                optionsContainer.replaceChildren();

                var item = {
                    element: questionElement,
                    prompt: promptText,
                    optionTexts: optionTexts,
                    data: questionData,
                    feedback: feedback,
                    options: [],
                    answered: false,
                    correct: false
                };

                optionTexts.forEach(function (optionText, optionIndex) {
                    var button = document.createElement('button');
                    var letter = document.createElement('span');
                    var answerText = document.createElement('span');

                    button.type = 'button';
                    button.className = 'quiz-option';
                    letter.className = 'quiz-letter';
                    letter.setAttribute('aria-hidden', 'true');
                    letter.textContent = String.fromCharCode(65 + optionIndex);
                    answerText.textContent = optionText;
                    button.appendChild(letter);
                    button.appendChild(answerText);
                    button.addEventListener('click', function () {
                        answerQuestion(item, optionIndex);
                    });
                    optionsContainer.appendChild(button);
                    item.options.push(button);
                });

                group.questions.push(item);
                allQuestions.push(item);
            });

            groups.push(group);
        });

        if (!allQuestions.length) {
            console.error('Question bank could not find any questions to initialize.');
            return;
        }

        var controls = document.createElement('section');
        controls.className = 'question-bank-tools';
        controls.setAttribute('aria-label', 'Question bank controls');
        controls.innerHTML =
            '<div class="question-bank-summary">' +
                '<p class="question-bank-eyebrow">Your progress</p>' +
                '<p class="question-bank-count"><span data-bank-answered>0</span> / ' + allQuestions.length +
                    ' answered <span class="question-bank-score">· <span data-bank-score>0</span> correct</span></p>' +
                '<div class="question-bank-progress" role="progressbar" aria-label="Questions answered" ' +
                    'aria-valuemin="0" aria-valuemax="' + allQuestions.length + '" aria-valuenow="0">' +
                    '<span data-bank-progress></span>' +
                '</div>' +
            '</div>' +
            '<label class="question-bank-field">Find a question' +
                '<input type="search" data-bank-search placeholder="Search questions or answers">' +
            '</label>' +
            '<label class="question-bank-field">Chapter' +
                '<select data-bank-chapter><option value="">All chapters</option></select>' +
            '</label>' +
            '<button type="button" class="question-bank-reset" data-bank-reset>Reset answers</button>' +
            '<p class="question-bank-filter-status" data-bank-filter-status aria-live="polite"></p>';

        groups.forEach(function (group) {
            var option = document.createElement('option');
            option.value = group.heading.textContent.match(/^\s*Chapter\s+(\d+)/i)[1];
            option.textContent = group.heading.textContent.trim();
            controls.querySelector('[data-bank-chapter]').appendChild(option);
        });

        var intro = document.querySelector('.textbox');

        if (intro && intro.parentNode) {
            intro.parentNode.insertBefore(controls, intro.nextSibling);
        } else {
            document.body.insertBefore(controls, document.body.firstChild);
        }

        var answeredElement = controls.querySelector('[data-bank-answered]');
        var scoreElement = controls.querySelector('[data-bank-score]');
        var progressElement = controls.querySelector('[data-bank-progress]');
        var progressTrack = controls.querySelector('[role="progressbar"]');
        var searchInput = controls.querySelector('[data-bank-search]');
        var chapterSelect = controls.querySelector('[data-bank-chapter]');
        var filterStatus = controls.querySelector('[data-bank-filter-status]');

        function updateProgress() {
            var answered = allQuestions.filter(function (question) {
                return question.answered;
            }).length;
            var score = allQuestions.filter(function (question) {
                return question.correct;
            }).length;

            answeredElement.textContent = String(answered);
            scoreElement.textContent = String(score);
            progressElement.style.width = ((answered / allQuestions.length) * 100) + '%';
            progressTrack.setAttribute('aria-valuenow', String(answered));
        }

        function applyFilters() {
            var search = searchInput.value.trim().toLowerCase();
            var selectedChapter = chapterSelect.value;
            var visibleCount = 0;

            groups.forEach(function (group) {
                var matches = 0;

                group.questions.forEach(function (question) {
                    var matchesChapter = !selectedChapter ||
                        group.heading.textContent.match(/^\s*Chapter\s+(\d+)/i)[1] === selectedChapter;
                    var searchableText = question.prompt + ' ' + question.optionTexts.join(' ');
                    var matchesSearch = !search || searchableText.toLowerCase().indexOf(search) !== -1;
                    var visible = matchesChapter && matchesSearch;

                    question.element.hidden = !visible;

                    if (visible) {
                        matches += 1;
                    }
                });

                group.heading.hidden = matches === 0;
                group.concept.hidden = matches === 0;
                visibleCount += matches;
            });

            filterStatus.textContent = visibleCount
                ? 'Showing ' + visibleCount + ' of ' + allQuestions.length + ' questions.'
                : 'No questions match your search.';
        }

        function answerQuestion(question, choiceIndex) {
            if (question.answered) {
                return;
            }

            question.answered = true;
            question.correct = choiceIndex === question.data.answer;

            question.options.forEach(function (button, index) {
                button.disabled = true;

                if (index === question.data.answer) {
                    button.classList.add('is-correct');
                } else if (index === choiceIndex) {
                    button.classList.add('is-wrong');
                }
            });

            question.feedback.classList.add('is-visible');
            question.feedback.classList.add(question.correct ? 'is-correct' : 'is-wrong');
            question.feedback.replaceChildren();

            var result = document.createElement('strong');
            result.textContent = question.correct
                ? 'Correct. '
                : 'Not quite. The correct answer is ' +
                    String.fromCharCode(65 + question.data.answer) + ': ' +
                    question.optionTexts[question.data.answer] + '. ';
            question.feedback.appendChild(result);
            question.feedback.appendChild(document.createTextNode(question.data.explanation));

            updateProgress();
        }

        function resetAnswers() {
            allQuestions.forEach(function (question) {
                question.answered = false;
                question.correct = false;
                question.options.forEach(function (button) {
                    button.disabled = false;
                    button.classList.remove('is-correct', 'is-wrong');
                });
                question.feedback.className = 'quiz-feedback';
                question.feedback.textContent = '';
            });

            updateProgress();
        }

        searchInput.addEventListener('input', applyFilters);
        chapterSelect.addEventListener('change', applyFilters);
        controls.querySelector('[data-bank-reset]').addEventListener('click', resetAnswers);

        updateProgress();
        applyFilters();
    }

    if (currentFile === 'QuestionBank.html') {
        initializeQuestionBank();
        return;
    }

    var questions = QUIZZES[currentFile];

    if (!questions || !questions.length || document.getElementById('chapter-quiz')) {
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

    questions = shuffle(questions).map(function (question) {
        var order = shuffle(question.options.map(function (option, index) {
            return index;
        }));

        return {
            q: question.q,
            options: order.map(function (index) {
                return question.options[index];
            }),
            answer: order.indexOf(question.answer),
            explanation: question.explanation
        };
    });

    var state = questions.map(function () {
        return { answered: false, selected: -1 };
    });
    var score = 0;
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    function questionMarkup(question, index) {
        var options = question.options.map(function (option, optionIndex) {
            return '<button type="button" class="quiz-option" data-choice="' + optionIndex + '">' +
                '<span class="quiz-letter" aria-hidden="true">' + letters[optionIndex] + '</span>' +
                '<span>' + option + '</span>' +
            '</button>';
        }).join('');

        return '<li class="quiz-question" data-question="' + index + '">' +
            '<div class="quiz-prompt" id="quiz-prompt-' + index + '">' +
                '<span class="quiz-number" aria-hidden="true">' + (index + 1) + '</span>' +
                '<span>' + question.q + '</span>' +
            '</div>' +
            '<div class="quiz-options" role="group" aria-labelledby="quiz-prompt-' + index + '">' + options + '</div>' +
            '<div class="quiz-feedback" role="status" aria-live="polite"></div>' +
        '</li>';
    }

    var section = document.createElement('section');
    section.className = 'chapter-quiz';
    section.id = 'chapter-quiz';
    section.setAttribute('aria-labelledby', 'chapter-quiz-title');
    section.innerHTML =
        '<div class="quiz-head">' +
            '<div class="quiz-heading">' +
                '<p class="quiz-kicker">Check your understanding</p>' +
                '<h2 class="quiz-title" id="chapter-quiz-title">Interactive Quiz</h2>' +
            '</div>' +
            '<div class="quiz-score-wrap">' +
                '<span class="quiz-score-label">Score</span>' +
                '<span class="quiz-score" data-quiz-score aria-live="polite">0 / ' + questions.length + '</span>' +
            '</div>' +
        '</div>' +
        '<div class="quiz-progress" aria-hidden="true"><div class="quiz-progress-bar" data-quiz-progress></div></div>' +
        '<div class="quiz-body">' +
            '<ol class="quiz-list">' + questions.map(questionMarkup).join('') + '</ol>' +
            '<div class="quiz-footer">' +
                '<p class="quiz-message" data-quiz-message>Select an answer to get instant feedback.</p>' +
                '<button type="button" class="quiz-reset" data-quiz-reset>Reset quiz</button>' +
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

    var scoreElement = section.querySelector('[data-quiz-score]');
    var progressElement = section.querySelector('[data-quiz-progress]');
    var messageElement = section.querySelector('[data-quiz-message]');

    function updateScore() {
        var answered = state.filter(function (item) {
            return item.answered;
        }).length;

        scoreElement.textContent = score + ' / ' + questions.length;
        progressElement.style.width = ((score / questions.length) * 100) + '%';

        if (answered === 0) {
            messageElement.textContent = 'Select an answer to get instant feedback.';
        } else if (score === questions.length) {
            messageElement.textContent = 'Perfect score. You have mastered this chapter.';
        } else if (score >= Math.ceil(questions.length * 0.6)) {
            messageElement.textContent = 'Good work. Review the explanations for any missed questions.';
        } else {
            messageElement.textContent = 'Keep going. Read each explanation carefully and try the reset button to retest.';
        }
    }

    function answerQuestion(questionIndex, choiceIndex) {
        if (state[questionIndex].answered) {
            return;
        }

        var question = questions[questionIndex];
        var questionElement = section.querySelector('[data-question="' + questionIndex + '"]');
        var options = questionElement.querySelectorAll('.quiz-option');
        var isCorrect = choiceIndex === question.answer;
        var feedback = questionElement.querySelector('.quiz-feedback');

        state[questionIndex].answered = true;
        state[questionIndex].selected = choiceIndex;

        if (isCorrect) {
            score += 1;
        }

        Array.prototype.forEach.call(options, function (option, optionIndex) {
            option.disabled = true;
            option.setAttribute('aria-disabled', 'true');

            if (optionIndex === question.answer) {
                option.classList.add('is-correct');
            }

            if (optionIndex === choiceIndex && !isCorrect) {
                option.classList.add('is-wrong');
            }
        });

        feedback.classList.add('is-visible');
        feedback.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
        feedback.innerHTML = isCorrect
            ? '<strong>Correct.</strong> ' + question.explanation
            : '<strong>Not quite.</strong> The correct answer is <strong>' + letters[question.answer] + '</strong>: ' + question.options[question.answer] + '. ' + question.explanation;

        updateScore();
    }

    function resetQuiz() {
        state = questions.map(function () {
            return { answered: false, selected: -1 };
        });
        score = 0;

        Array.prototype.forEach.call(section.querySelectorAll('.quiz-option'), function (option) {
            option.disabled = false;
            option.removeAttribute('aria-disabled');
            option.classList.remove('is-correct', 'is-wrong');
        });

        Array.prototype.forEach.call(section.querySelectorAll('.quiz-feedback'), function (feedback) {
            feedback.className = 'quiz-feedback';
            feedback.innerHTML = '';
        });

        updateScore();
    }

    section.addEventListener('click', function (event) {
        var option = event.target.closest ? event.target.closest('.quiz-option') : null;

        if (option) {
            var questionElement = option.closest('.quiz-question');
            var questionIndex = parseInt(questionElement.getAttribute('data-question'), 10);
            var choiceIndex = parseInt(option.getAttribute('data-choice'), 10);
            answerQuestion(questionIndex, choiceIndex);
            return;
        }

        if (event.target.closest && event.target.closest('[data-quiz-reset]')) {
            resetQuiz();
        }
    });

    updateScore();
})();
